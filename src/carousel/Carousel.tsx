import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

interface Options {
  direction?: "up" | "down" | "left" | "right";
  buttonStyle?: "default" | "none";
  timer: number;
  triggerNext?: boolean;
}

interface Props {
  content: any[];
  options?: Options;
}

export default function Carousel({ content, options }: Props) {
  const [currentDisplay, setCurrentDisplay] = useState(0);

  const onPrevClick = () => {
    setCurrentDisplay((currState) => {
      if (currState === 0) {
        return content.length - 1;
      } else {
        return currState - 1;
      }
    });
  };

  const onNextClick = () => {
    setCurrentDisplay((currState) => {
      if (currState === content.length - 1) {
        return 0;
      } else {
        return currState + 1;
      }
    });
  };

  useEffect(() => {
    let intervalID: string | number | NodeJS.Timer | undefined;
    if (options?.timer) {
      intervalID = setInterval(onNextClick, options.timer);
    }
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <button type="button" onClick={onPrevClick}>
          Prev
        </button>
        <div>{content[currentDisplay]}</div>
        <button type="button" onClick={onNextClick}>
          Next
        </button>
      </div>
      <h1>{currentDisplay}</h1>
    </div>
  );
}
