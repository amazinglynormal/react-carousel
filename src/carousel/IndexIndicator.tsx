import styles from "./IndexIndicator.module.css";

interface Props {
  total: number;
  current: number;
  style: "circle" | "square" | "line";
}

export default function IndexIndicator({ total, current, style }: Props) {
  const indicators = [];

  for (let i = 0; i < total; i++) {
    indicators.push(
      <div
        key={i}
        className={`${styles[style]} ${i === current ? styles.current : ""}`}
      ></div>
    );
  }

  return <div className={styles.container}>{indicators}</div>;
}
