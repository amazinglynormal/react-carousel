import Carousel from "./carousel/Carousel";
import Image from "./carousel/Image";

const images = [
  { src: "nature-1.jpg", alt: "mountain" },
  { src: "nature-2.jpg", alt: "snowy mountain" },
  { src: "nature-3.jpg", alt: "desert" },
  { src: "nature-4.jpg", alt: "forest background" },
  { src: "nature-5.jpg", alt: " another mountain" },
];

function App() {
  const content: React.ReactElement[] = [];

  images.forEach((image) => {
    content.push(
      <Image
        key={image.alt}
        src={require(`./images/${image.src}`)}
        alt={image.alt}
      />
    );
  });

  return (
    <div>
      <Carousel content={content} />
    </div>
  );
}

export default App;
