import { useEffect, useRef } from "react";
import { useLocation, Location } from "react-router-dom";

interface RouterData {
  from: Partial<Location>;
  to: Location;
}

export function useRouteChange(cb: (data: RouterData) => void) {
  const location = useLocation();
  const lastPath = useRef<Partial<Location>>({});

  useEffect(() => {
    cb({ from: lastPath.current, to: location });
    lastPath.current = location;
  }, [location, lastPath]);
}
