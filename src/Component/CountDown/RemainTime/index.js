import React, {useEffect, useState} from 'react';

const Index = (props) => {

    const {formatCountDown, isCountingDown, handlePauseResume} = props;

    const [combinedClass, setCombinedClass] = useState("color-red");



    useEffect(() => {
        const timeArr = formatCountDown.split(' : ');
        if (!isCountingDown) {
            setCombinedClass("color-yellow");
        }else if (timeArr[0] !== '00' || timeArr[1] !== '00') {
            setCombinedClass("color-green") ;
        } else {
            setCombinedClass("color-red");
        }
    }, [isCountingDown, formatCountDown])

    return (
        <div className='remain-time-container__div'>
            <h1
                className={combinedClass}
            >
                {formatCountDown}
            </h1>
            {isCountingDown ? <button onClick={handlePauseResume}>Pause</button> : <button className='resume-button--color-yellow' onClick={handlePauseResume}>Resume</button>}

        </div>
    );
};

export default Index;