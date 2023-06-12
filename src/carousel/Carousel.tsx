interface Options {
  direction?: "up" | "down" | "left" | "right";
  buttonStyle?: "default" | "none";
  timer?: number | "manual";
  triggerNext?: boolean;
}

interface Props {
  content: any[];
  options?: Options;
}

export default function Carousel({ content, options }: Props) {
  return (
    <div>
      <button type="button">Prev</button>
      <div>{content}</div>
      <button type="button">Next</button>
    </div>
  );
}
