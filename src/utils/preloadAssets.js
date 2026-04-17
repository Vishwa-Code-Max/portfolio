import { assets } from "../assets/assets";

export const preloadAssets = (onProgress) => {
  const assetList = [];

  // Collect ALL asset groups dynamically
  Object.values(assets).forEach((group) => {
    if (typeof group === "object") {
      assetList.push(...Object.values(group));
    }
  });

  let loaded = 0;
  const total = assetList.length;

  const updateProgress = () => {
    loaded++;
    const progress = Math.floor((loaded / total) * 100);
    onProgress?.(progress);
  };

  const loadAsset = (src) => {
    return new Promise((resolve) => {
      const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);

      if (isVideo) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.src = src;

        video.onloadeddata = () => {
          updateProgress();
          resolve();
        };

        video.onerror = () => {
          updateProgress();
          resolve();
        };
      } else {
        const img = new Image();
        img.decoding = "async";
        img.src = src;

        img.onload = () => {
          updateProgress();
          resolve();
        };

        img.onerror = () => {
          updateProgress();
          resolve();
        };
      }
    });
  };

  return Promise.all(assetList.map(loadAsset));
};