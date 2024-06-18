import { useState, useEffect } from "react";

const Timer = () => {
    let [days, setDays] = useState([0, 0]);
    let [hours, setHours] = useState([0, 0]);
    let [minutes, setMinutes] = useState([0, 0]);
    let [seconds, setSeconds] = useState([0, 0]);

    const initiateTimeLeft = (timeLeft) => {
        let now = new Date().getTime();
        let distance = timeLeft - now;

        let theDays = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
        let theHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
        let theMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
        let theSeconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

        if (theDays.length === 1) {
            setDays(['0', theDays]);
        } else if (theDays.length === 2) {
            setDays([theDays[0], theDays[1]]);
        }

        if (theHours.length === 1) {
            setHours(['0', theHours]);
        } else if (theHours.length === 2) {
            setHours([theHours[0], theHours[1]]);
        }

        if (theMinutes.length === 1) {
            setMinutes(['0', theMinutes]);
        } else if (theMinutes.length === 2) {
            setMinutes([theMinutes[0], theMinutes[1]]);
        }

        if (theSeconds.length === 1) {
            setSeconds(['0', theSeconds]);
        } else if (theSeconds.length === 2) {
            setSeconds([theSeconds[0], theSeconds[1]]);
        }

    };

    useEffect(() => {
        let timeLeft = new Date().getTime() + 100000000;

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