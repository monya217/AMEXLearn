import { useEffect } from 'react';

const useBootstrap = () => {
  useEffect(() => {
    const bootstrapCSSLink = document.createElement("link");
    bootstrapCSSLink.rel = "stylesheet";
    bootstrapCSSLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    bootstrapCSSLink.integrity = "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD";
    bootstrapCSSLink.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCSSLink);

    return () => {
      document.head.removeChild(bootstrapCSSLink);
    };
  }, []);
};

export default useBootstrap;
