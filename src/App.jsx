import { useEffect, useState } from "react";
import { preloadAssets } from "./utils/preloadAssets";
import Loader from "./utils/Loader";
import Parent from "./Parent";

function App() {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    preloadAssets(setProgress).then(() => {
      setTimeout(() => {
        setReady(true);
      }, 300);
    });
  }, []);

  if (!ready) {
    return <Loader progress={progress} />;
  }

  return <Parent />;
}

export default App;