import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getMonsters } from "../../../database/api/api";
import { Navigation } from "swiper/modules";

const MonsterSwiper = () => {
    const [monsters, setMonsters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [screen, setScreen] = useState({});

    useEffect(() => {
        let screenObject = window.screen;

        try {
            setScreen(screenObject);
            let monstersData = getMonsters();
            setMonsters(monstersData.monsters);
        } catch(e) {
            setError(e);
        }

        setIsLoading(false);
    }, []);

    return (
        <>
        <Swiper  slidesPerView={screen.width < 770 ? 1 : 3} loop={true} spaceBetween={60} className="mySwiper" modules={[Navigation]} navigation={true} >
            {monsters.map(monster => {
                return (<SwiperSlide key={monster.id}>
                    <div className="monsters-slide">
                        <div className="monsters-slide-media"><img src={monster.picture} /></div>
                        <div className="monsters-slide-content">
                            <h3>{monster.name}</h3>
                            <p>{monster.description}</p>
                        </div>
                    </div>
                </SwiperSlide>)
            })}
        </Swiper>
        </>
    )
};

export default MonsterSwiper;