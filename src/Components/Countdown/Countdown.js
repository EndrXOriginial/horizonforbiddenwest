import Timer from './Timer/Timer';
import './countdown.css';

const Countdown = () => {
    return (
        <section className="countdown" id='countdown'>
            <div className='wrapper'>
                <h2 className="title">Complete edition is out!</h2>
                <p className='countdown-info'>Get it <span>10%</span> off before the timer runs out :</p>
                <Timer />
            </div>
        </section>
    )
}

export default Countdown;