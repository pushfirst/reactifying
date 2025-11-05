import React, { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);
  // check user network status
  useEffect(() => {
    window.addEventListener("offline", (event) => {
        setNetworkStatus(false);
    });
    window.addEventListener("online", (event) => {
        setNetworkStatus(true);
    });

  });

  return networkStatus;
};

export default useNetworkStatus;
