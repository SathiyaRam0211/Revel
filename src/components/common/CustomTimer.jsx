import React, { useState, useRef, useEffect } from "react";
import { ContainerText } from "../../utils/util-styled-components";

const CustomTimer = ({ startCount = 60, onExpire = () => {} }) => {
  const [displayCount, setDisplayCount] = useState(startCount);
  const countRef = useRef(startCount);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countRef.current === 0) {
        clearInterval(timer);
        onExpire();
      } else {
        countRef.current -= 1;
        setDisplayCount(countRef.current);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onExpire]);

  useEffect(() => {
    countRef.current = startCount;
    setDisplayCount(startCount);
  }, [startCount]);

  return <ContainerText>{displayCount} second(s) left</ContainerText>;
};

export default CustomTimer;
