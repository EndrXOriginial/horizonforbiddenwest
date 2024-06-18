import { useState, useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { getCharacters } from '../../../database/api/api';
import { CharacterSlide } from './CharacterSlide';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperCharacters = (prop) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        let data;
        setScreenWidth(window.screen.width);

        try {
            data = getCharacters();
            setCharacters(data.characters);
        } catch (e) {
            setError(e);
        }
        setIsLoading(false);
    }, []);

    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper' loop={true} slidesPerView={screenWidth < 770 ? 1 : 3} spaceBetween={60}> 
            {isLoading ? 'things are loading in' : characters.map(character => {
                return <SwiperSlide key={character.id}><CharacterSlide character={character}/></SwiperSlide>
            })}
        </Swiper>
        </>
    )
}

export default SwiperCharacters;