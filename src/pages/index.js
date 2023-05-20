import Image from "next/image";
import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import s from "@/app/Home.module.css";
import "swiper/css/pagination";
import Products from "@/components/products";




 const Home=() => {
  
  return (
    <>
    
      {/* swiper */}

      <div className="my-6">

        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, el: '.swiper-custom-pagination'
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper custom-swiper-container">

          <SwiperSlide className={s.swiper_slide}>
            <img className="w-full" src=".././Hero_pic.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="../../Hero_pic.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="../../Hero_pic.jpg"></img>
          </SwiperSlide>
          <div className={s.main_title}>
            <div className={s.title_wrapper}>
              <span className={s.title1}>SHOP</span>
              <span className={s.title2}>CLOTHING</span>
              <span className={s.title3}>HERE</span>
            </div>
          </div>
        </ Swiper>
        <div className="swiper-custom-pagination" /></div>

        <Products className='grid grid-cols-4' limit={4} columns={4} />
    </>
  );
}
export default Home