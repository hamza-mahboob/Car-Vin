import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const myRef = useRef(null)
  const {pathname} = useLocation()

  useEffect(() => {
    myRef.current.scrollIntoView()
    // console.log('here')
  }, [pathname]);

  return (
    <div ref={myRef}>
    </div>
  );
};

export default ScrollToTop;
