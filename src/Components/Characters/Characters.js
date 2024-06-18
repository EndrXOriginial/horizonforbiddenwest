import './characters.css';
import SwiperCharacters from './SwiperCharacters/SwiperCharacters';

const Characters = () => {
    return (
        <section className='characters' id='characters'>
            <div className='characters-wrapper'>
                <h2 className='characters-title'>Meet the characters</h2>
            </div>
            <SwiperCharacters />
        </section>
    )
}

export default Characters;