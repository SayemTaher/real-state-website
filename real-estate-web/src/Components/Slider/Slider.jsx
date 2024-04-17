import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Import Swiper styles
import 'swiper/swiper-bundle.css';

const Slider = () => {
  return (
    <div className='-z-10'>


      <style dangerouslySetInnerHTML={{
        __html: `
                .swiper-button-next, .swiper-button-prev {
                    color: #F4F8EC; 
                     
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 40px;
                    color: #ffffff;
                }
                .swiper-pagination-bullet {
                  background: #ffffff; 
                  opacity: 0.6; 
                  width: 8px; 
                  height: 8px; 
                  border-radius: 50%; 
              }
              
              .swiper-pagination-bullet-active {
                  background: #292900; 
                  opacity: 1; 
              }
            `}} />


      <Swiper data-aos="fade-up"
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

        <SwiperSlide><div data-aos="fade-up" className=" bg-[url('https://i.ibb.co/V06x3Wr/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg')] bg-blend-multiply   bg-gray-300  bg-cover bg-no-repeat flex flex-col justify-center items-center min-h-[800px]">
          <div className=' p-5 flex backdrop-blur-md border-2 border-gray-100 flex-col justify-center rounded-xl '>
            <div className='  lg:w-[800px] w-[400px] flex ml-10 mt-10 p-5 flex-col  justify-start items-start'>

              {/* <img className='w-[300px] h-[100px] object-cover'  src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png" alt="logo" /> */}
              <span className='text-2xl text-white font-bold'>Douglas | Penthouse</span>
              <h1 className='font-bold text-2xl mt-4 mb-4 lg:text-5xl md:text-3xl text-white'> Breathtaking Views</h1>
              <p className='text-white text-lg'>Panoramic Elegance: A View from the Top</p>
              <button className='btn mt-4 mb-4 bg-primaryOlive hover:bg-secondaryOlive rounded-full w-[120px] text-white lg:w-[150px] text-center'>Book to view</button>
            </div>






          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className=" bg-[url('https://i.ibb.co/kK7P4cb/sam-moghadam-khamseh-EKPQ1-NUTo6o-unsplash.jpg')] bg-blend-multiply  bg-gray-300  bg-cover bg-no-repeat flex flex-col justify-center items-center min-h-[800px]">
          <div className=' p-5 flex backdrop-blur-md border-2 border-gray-100 flex-col justify-center rounded-xl '>

            <div className='  lg:w-[800px] w-[400px] flex ml-10 mt-10 p-5 flex-col  justify-start items-start'>

              {/* <img className='w-[300px] h-[100px] object-cover'  src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png" alt="logo" /> */}
              <span className='text-2xl text-white font-bold'>Douglas | Penthouse</span>
              <h1 className='font-bold text-2xl mt-4 mb-4 lg:text-5xl md:text-3xl text-white'> Luxurious Amenities</h1>
              <p className='text-white text-lg'>Unparalleled Amenities: Live, Play, and Relax in Style</p>
              <button className='btn mt-4 mb-4 bg-primaryOlive hover:bg-secondaryOlive rounded-full w-[120px] text-white lg:w-[150px] text-center'>Book to view</button>
            </div>





          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className=" bg-[url('https://i.ibb.co/ZJn6C4X/im3rd-media-f888opo-BHUo-unsplash.jpg')] bg-blend-multiply  bg-gray-300  bg-cover bg-no-repeat flex flex-col justify-center items-center min-h-[800px]">
          <div className=' p-5 flex backdrop-blur-md border-2 border-gray-100 flex-col justify-center rounded-xl '>
            <div className='  lg:w-[800px] w-[400px] flex ml-10 mt-10 p-5 flex-col  justify-start items-start'>

              {/* <img className='w-[300px] h-[100px] object-cover'  src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png" alt="logo" /> */}
              <span className='text-2xl text-white font-bold'>Douglas | Penthouse</span>
              <h1 className='font-bold text-2xl mt-4 mb-4 lg:text-5xl md:text-3xl text-white'> Smart Home Features and Sustainability</h1>
              <p className='text-white text-lg'>Smart Living: Advanced Technology Meets Environmental Stewardship</p>
              <button className='btn mt-4 mb-4 bg-primaryOlive hover:bg-secondaryOlive rounded-full w-[120px] text-white lg:w-[150px] text-center'>Book to view</button>
            </div>
          </div>
        </div></SwiperSlide>

      </Swiper>
    </div>
  )
}
export default Slider