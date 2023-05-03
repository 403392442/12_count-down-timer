import React from 'react';

import RemainTime from "./RemainTime";
import SetTime from "./SetTime";
import useCountDown from "../../Hooks/useCountDown";

const Index = () => {

    const {
        inputSeconds,
        inputMinutes,
        formatCountDown,
        isCountingDown,
        handleMinutesChange,
        handleSecondsChange,
        handleReset,
        handleStart,
        handlePauseResume
    } = useCountDown();

    return (
        <div className='count-down-container__div'>
            <h2>Count Down Timer</h2>
            <RemainTime
                formatCountDown={formatCountDown}
                isCountingDown={isCountingDown}
                handlePauseResume={handlePauseResume}
            />
            <hr/>
            <SetTime
                inputMinutes={inputMinutes}
                inputSeconds={inputSeconds}
                handleMinutesChange={handleMinutesChange}
                handleSecondsChange={handleSecondsChange}
                handleStart={handleStart}
                handleReset={handleReset}
            />
        </div>
    );
};

export default Index;