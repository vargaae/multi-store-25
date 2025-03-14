import { shops } from "../../constants";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { CarouselContainer, CarouselItem } from "./Carousel.styles";

const demoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt94EjayRbU_oim_ZJzHHODBNDhCDQzaUIw&usqp=CAU";

const Carousel = () => {
  const responsive = {
    0: { items: 3 },
    512: { items: 4 },
    1024: { items: 5 },
    1200: { items: 6 },
  };

  const items = shops.map((shop) => {
    return (
      <CarouselItem
        to={`${shop.shopLink}`}
        key={shop.title}
        className="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <img
          src={shop?.imgUrl || demoImage}
          alt={shop?.title}
          height="80"
          className="w-full"
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{shop?.title}</div>
          <p className="text-gray-700 text-base">{shop?.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {shop?.company}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            sale
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            30%
          </span>
        </div>
      </CarouselItem>
    );
  });

  return (
    <CarouselContainer>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        disableButtonsControls
      />
    </CarouselContainer>
  );
};

export default Carousel;
