import { assets } from "../assets/assets";

export const assetCache = new Map();

export const preloadAssets = async (onProgress) => {
  const assetList = [];

  // Collect ALL assets recursively
  const collect = (obj) => {
    Object.values(obj).forEach((value) => {
      if (typeof value === "string") {
        assetList.push(value);
      } else if (typeof value === "object" && value !== null) {
        collect(value);
      }
    });
  };

  collect(assets);

  const uniqueAssets = Array.from(new Set(assetList));
  let loaded = 0;
  const total = uniqueAssets.length;

  const updateProgress = () => {
    loaded++;
    const progress = Math.floor((loaded / total) * 100);
    onProgress?.(progress);
  };

  const loadAsset = (src) => {
    // Return from cache if already loaded
    if (assetCache.has(src)) {
      updateProgress();
      return Promise.resolve(assetCache.get(src));
    }

    return new Promise((resolve) => {
      const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);
      const isModel = /\.(glb|gltf|bin)$/i.test(src);

      if (isModel) {
        fetch(src)
          .then((res) => {
            if (!res.ok) throw new Error("Failed to load model");
            return res.blob();
          })
          .then((blob) => {
            const blobUrl = URL.createObjectURL(blob);
            assetCache.set(src, blobUrl);
            updateProgress();
            resolve(blobUrl);
          })
          .catch(() => {
            console.warn(`Failed to preload model: ${src}`);
            updateProgress();
            resolve(null);
          });
      } else if (isVideo) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.muted = true;
        video.playsInline = true;
        video.src = src;

        video.oncanplaythrough = () => {
          assetCache.set(src, video);
          updateProgress();
          resolve(video);
        };

        video.onerror = () => {
          updateProgress();
          resolve(null);
        };
        
        // Timeout for video
        setTimeout(() => resolve(null), 10000);
      } else {
        const img = new Image();
        // Force synchronous decoding preparation if possible
        img.src = src;

        img.onload = () => {
          assetCache.set(src, img);
          updateProgress();
          resolve(img);
        };

        img.onerror = () => {
          updateProgress();
          resolve(null);
        };
      }
    });
  };

  const BATCH_SIZE = 15; 
  for (let i = 0; i < uniqueAssets.length; i += BATCH_SIZE) {
    const batch = uniqueAssets.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(loadAsset));
  }

  return true;
};

