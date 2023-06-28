import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTheme from "../../hooks/useTheme";
const Carousel = ({ img1, img2, img3, img4, img5 }) => {
    const { theme } = useTheme();
    return (
        <div className={`overflow-hidden rounded rounded-b-none border-4 border-b-2 ${theme === "light" ? "border-[rgba(173,173,173,0.7)]" : "border-[rgba(0,0,0,0.7)]"}`}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><figure className="h-52 w-full overflow-hidden"><img className="min-h-full" src={img1} alt="" /></figure></SwiperSlide>
                <SwiperSlide><figure className="h-52 w-full overflow-hidden"><img className="min-h-full" src={img2} alt="" /></figure></SwiperSlide>
                <SwiperSlide><figure className="h-52 w-full overflow-hidden"><img className="min-h-full" src={img3} alt="" /></figure></SwiperSlide>
                <SwiperSlide><figure className="h-52 w-full overflow-hidden"><img className="min-h-full" src={img4} alt="" /></figure></SwiperSlide>
                <SwiperSlide><figure className="h-52 w-full overflow-hidden"><img className="min-h-full" src={img5} alt="" /></figure></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;