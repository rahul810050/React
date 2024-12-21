import React, { useEffect, useState } from "react";
import Menubar from "../icons/menubar";

// Custom hook to handle media queries
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);
    setMatches(media.matches); // Initial state setup
    media.addEventListener("change", listener); // Updated to use addEventListener
    return () => media.removeEventListener("change", listener); // Updated to use removeEventListener
  }, [query]); // Removed `matches` from dependency array

  return matches;
}

function SideBar() {
  const [openMenuBar, setOpenMenuBar] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Fixed typo in media query

  useEffect(() => {
    setOpenMenuBar(isDesktop); // Simplified effect logic
  }, [isDesktop]);

  return (
    <div>
      {openMenuBar ? (
        <div className="h-screen w-80 fixed top-0 left-0 md:relative bg-green-600">
          <div
            onClick={() => setOpenMenuBar(false)}
            className="cursor-pointer p-4"
          >
            <Menubar />
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0">
          <div
            onClick={() => setOpenMenuBar(true)}
            className="cursor-pointer p-4"
          >
            <Menubar />
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
