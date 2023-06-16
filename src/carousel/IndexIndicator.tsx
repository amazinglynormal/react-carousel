import styles from "./IndexIndicator.module.css";

interface Props {
  total: number;
  current: number;
  shape: "circle" | "square" | "line";
}

export default function IndexIndicator({ total, current, shape }: Props) {
  const indicators = [];

  for (let i = 0; i < total; i++) {
    indicators.push(
      <div
        key={i}
        className={`${styles[shape]} ${i === current ? styles.current : ""}`}
      ></div>
    );
  }

  return <div className={styles.container}>{indicators}</div>;
}
