import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperCharacters = (prop) => {

    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper' loop={true} slidesPerView={3}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </>
    )
}

export default SwiperCharacters;