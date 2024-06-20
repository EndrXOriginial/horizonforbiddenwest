import MonsterSwiper from "./MonsterSwiper/MonsterSwiper";
import './monster.css';

const Monsters = () => {
    return (
        <section className="monsters" id="monsters">
            <h2 className="monsters-title">Monsters of Horizon</h2>
            <MonsterSwiper />
        </section>
    )
};

export default Monsters;