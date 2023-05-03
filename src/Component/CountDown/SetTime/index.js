import React from 'react';

const Index = (props) => {
    const {inputMinutes, inputSeconds, handleMinutesChange, handleSecondsChange, handleStart, handleReset} = props;

    return (

        <form onSubmit={e => handleStart(e)}>
            <div className='set-time-input-container__div' >
                <label>
                    <p><strong>Minutes</strong></p>
                    <input type="number" value={inputMinutes} onChange={e => handleMinutesChange(e)}
                           placeholder="Input minutes"/>
                </label>
                <label>
                    <p><strong>Seconds</strong></p>
                    <input type="number" value={inputSeconds} onChange={e => handleSecondsChange(e)}
                           placeholder="Input seconds"/>
                </label>
            </div>
            <div className='set-time-button-group__div'>
                <button type='submit'>Start</button>
                <button type='button' onClick={handleReset}>Reset</button>
            </div>
        </form>

    );
};

export default Index;