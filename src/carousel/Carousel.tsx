import { useState } from "react";
import styles from "./Carousel.module.css";

interface Options {
  direction?: "up" | "down" | "left" | "right";
  buttonStyle?: "default" | "none";
  timer?: number;
  triggerNext?: boolean;
}

interface Props {
  content: any[];
  options?: Options;
}

export default function Carousel({ content, options }: Props) {
  const [currentDisplay, setCurrentDisplay] = useState(0);

  const onPrevClick = () => {
    if (currentDisplay == 0) {
      setCurrentDisplay(content.length - 1);
    } else {
      setCurrentDisplay((currState) => currState - 1);
    }
  };

  const onNextClick = () => {
    if (currentDisplay == content.length - 1) {
      setCurrentDisplay(0);
    } else {
      setCurrentDisplay((currState) => currState + 1);
    }
  };

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
