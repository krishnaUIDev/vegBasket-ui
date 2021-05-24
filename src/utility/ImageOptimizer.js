import React, { useState, useEffect } from "react";

const useConnectionType = (defaultConnectionType) => {
  const isSupported = navigator?.connection?.effectiveType ? true : false;

  const [connectionType, setNetworkStatus] = useState(
    isSupported ? navigator.connection.effectiveType : defaultConnectionType
  );

  useEffect(() => {
    if (isSupported) {
      const { connection } = navigator;
      const updateConnectionType = () => {
        setNetworkStatus(connection.effectiveType);
      };

      connection.addEventListener("change", updateConnectionType);

      return () => {
        connection.removeEventListener("change", updateConnectionType);
      };
    }
  }, []);

  return [connectionType, setNetworkStatus];
};

function ImageOptimizer({ src }) {
  const [connectionType] = useConnectionType();

  let compressionLevel = 0;

  switch (connectionType) {
    case "slow-2g":
      compressionLevel = 65;
      break;
    case "2g":
      compressionLevel = 50;
      break;
    case "3g":
      compressionLevel = 30;
      break;
    case "4g":
      compressionLevel = 0;
      break;
  }

  return (
    <div>
      <img src={`${src}/?imgeng?=cmpr_${compressionLevel}`} loading="lazy" />
    </div>
  );
}

export default ImageOptimizer;
