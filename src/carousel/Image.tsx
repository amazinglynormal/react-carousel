import styles from "./Image.module.css";

interface Props {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: Props) {
  return <img className={styles.img} src={src} alt={alt} />;
}
