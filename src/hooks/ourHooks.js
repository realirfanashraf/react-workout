import { useRef, useEffect, useState } from "react";

function useTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);
  const labelRef = useRef();
  const refObj = useRef();

  useEffect(() => {
    if (showTooltip) {
      const width1 = labelRef.current.getBoundingClientRect().width;
      const width2 = refObj.current.getBoundingClientRect().width;
      console.log(width1, width2);
    }
  }, [showTooltip]);

  return [showTooltip, setShowTooltip, labelRef, refObj];
}

export { useTooltip };
