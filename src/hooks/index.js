import { useEffect } from "react";

const useOnClickOutside = (refs, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Normalize to array
      const refArray = Array.isArray(refs) ? refs : [refs];

      // If click is inside any of the refs, do nothing
      if (
        refArray.some(
          (ref) => ref.current && ref.current.contains(event.target)
        )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
};

export default useOnClickOutside;
