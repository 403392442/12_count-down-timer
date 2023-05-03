import {useEffect, useMemo, useState} from "react";

const useCountDown = () => {
    const [inputSeconds, setInputSeconds] = useState('');
    const [inputMinutes, setInputMinutes] = useState('');
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);

    useEffect(() => {
        let timer;
        if (isCountingDown) {
            timer = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours(hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                } else {
                    clearInterval(timer);
                }
            }, 1000)
        }

        return () => {
            clearInterval(timer);
        }
    },[isCountingDown, seconds, minutes, hours])

    const handleMinutesChange = (e) => {
        const newMinutes = parseInt(e.target.value);
        if (!isNaN(newMinutes)) {
            setInputMinutes(newMinutes);
        }
    }

    const handleSecondsChange = (e) => {
        let newSeconds = parseInt(e.target.value);
        if (!isNaN(newSeconds)) {
            setInputSeconds(newSeconds);
        }
    }

    const handleReset = () => {
        setMinutes(0);
        setSeconds(0);
        setHours(0);
        setIsCountingDown(false);
    }

    const handlePauseResume = () => {
        setIsCountingDown(!isCountingDown);
    }

    const handleStart = (e) => {
        e.preventDefault();

        let newSeconds = inputSeconds;
        let newMinutes = inputMinutes;
        let newHours = 0;

        while (newSeconds > 60) {
            newSeconds -= 60;
            newMinutes += 1;
        }

        while (newMinutes > 60) {
            newMinutes -= 60;
            newHours += 1;
        }

        setInputMinutes('');
        setInputSeconds('');
        setSeconds(newSeconds);
        setMinutes(newMinutes);
        setHours(newHours);
        setIsCountingDown(true);
    }

    const formatCountDown = useMemo(() => {
        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
    }, [hours, minutes, seconds])


    return {
        inputSeconds,
        inputMinutes,
        formatCountDown,
        isCountingDown,
        handleMinutesChange,
        handleSecondsChange,
        handleReset,
        handleStart,
        handlePauseResume,
    }
}

export default useCountDown;