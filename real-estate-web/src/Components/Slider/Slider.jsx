import {SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Import Swiper styles
import 'swiper/swiper-bundle.css';

const Slider = () => {
    return (
        <div>
            <Swiper data-aos ="fade-in"
                spaceBetween={50}
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><div className='bg-blue-300 flex flex-col justify-center items-center min-h-[800px]'>
                    slide 1</div></SwiperSlide>
                <SwiperSlide><div className='bg-blue-300 flex flex-col justify-center items-center h-[800px]'>
                    slide 2</div></SwiperSlide>
                <SwiperSlide><div className='bg-blue-300 flex flex-col justify-center items-center h-[800px]'>
                    slide 3</div></SwiperSlide>
                <SwiperSlide><div className='bg-blue-300 flex flex-col justify-center items-center h-[800px]'>
                    slide 4</div></SwiperSlide>

            </Swiper>
        </div>
    )
}
export default Slider