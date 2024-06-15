import { useState, useEffect } from "react";

const Timer = () => {
    let [days, setDays] = useState([]);
    let [hours, setHours] = useState([]);
    let [minutes, setMinutes] = useState([]);
    let [seconds, setSeconds] = useState([]);

    const initiateTimeLeft = (timeLeft) => {
        let now = new Date().getTime();
        let distance = timeLeft - now;

        let theDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        let theHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let theMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let theSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        // console.log(`Days: ${theDays}\nHours: ${theHours}\nMinutes: ${theMinutes}\nSeconds: ${theSeconds}`);
        
        setSeconds(!theSeconds ? [0, 0] : [...theSeconds.toString()].map(Number));
        setMinutes(!theMinutes ? [0, 0] : [...theMinutes.toString()].map(Number));
        setHours(!theHours ? [0, 0] : [...theHours.toString()].map(Number));
        setDays(!theDays ? [0, 0] : [...theDays.toString()].map(Number));
        
        if (days.length === 1) setDays([0, ...days]);
        if (hours.length === 1) setHours([0, ...hours]);
        if (minutes.length === 1) setMinutes([0, ...minutes]);
        if (seconds.length === 1) setSeconds([0, ...seconds]);

        // console.log(`Days: ${days[0]}${days[1]}\nHours: ${hours[0]}${hours[1]}\nMinutes: ${minutes[0]}${minutes[1]}\nSeconds: ${seconds[0]}${seconds[1]}`);
    };

    useEffect(() => {
        let timeLeft = new Date().getTime() + 100000;
        
        let interval = setInterval(() => {
            initiateTimeLeft(timeLeft);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="timer">
            <div className="days-ten timer-div"><p className="days-ten-num">{days[0]}</p></div>
            <div className="days timer-div"><p className="days-num">{days[1]}</p></div>
            <p>:</p>
            <div className="hours-ten timer-div"><p className="hours-ten-num">{hours[0]}</p></div>
            <div className="hours timer-div"><p className="hours-num">{hours[1]}</p></div>
            <p>:</p>
            <div className="minutes-ten timer-div"><p className="minutes-ten-num">{minutes[0]}</p></div>
            <div className="minutes timer-div"><p className="minutes-num">{minutes[1]}</p></div>
            <p>:</p>
            <div className="seconds-ten timer-div"><p className="seconds-ten-num">{seconds[0]}</p></div>
            <div className="seconds timer-div"><p className="seconds-num">{seconds[1]}</p></div> 
        </div>
    )
}

export default Timer;