// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../components/css/Carousel.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/carousel1.jpg'
import bgimg2 from '../assets/images/carousel2.jpg'
import bgimg3 from '../assets/images/carousel3.jpg'

export default function Carousel() {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Discover the Past'
                        text2='Explore the secrets of history, one artifact at a time.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text='Unearthing History'
                        text2='A journey through time with every artifact found.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Artifacts of the Ages'
                        text2='Preserving stories from ancient civilizations to modern discoveries.'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
