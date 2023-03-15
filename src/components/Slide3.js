import Button from './Button';
import Description_piechart from './graphs/Description_piechart'


function Slide3({ forwardHandler, backwardHandler }) {

    return (
        <div className='slide3'>
            <div className='presentation-title'>
                <img id="logo" src="https://www.sentisquare.com/data/img/horse-black.svg" alt="logo" />
                <h2>1. Quick results</h2>
            </div>
            
            <div className='content-container'>
                <div className='left'>
                    <p># Feedbacks: 5274 </p>
                    ---------------------------
                    <p className='positive'># Positive: 4253 ({(4253 / 5274 * 100).toFixed(1)} %)</p>
                    <p className='negative'># Negative: 1021 ({(1021 / 5274 * 100).toFixed(1)} %)</p>
                    <p className='neutral'># Neutral:  0 ({(0 / 5274 * 100).toFixed(1)} %)</p>
                    ---------------------------
                    <p>Female: 2911 ({(2910 / 5274 * 100).toFixed(1)} %)</p>
                    <p>Male: 2363 ({(2360 / 5274 * 100).toFixed(1)} %)</p>
                    ---------------------------
                    <p>Age group 0 - 30: ({(1616 / 5274 * 100).toFixed(1)} %)</p>
                    <p>Age group 30 - 60: ({(1900 / 5274 * 100).toFixed(1)} %)</p>
                    <p>Age group 60+: ({(1758 / 5274 * 100).toFixed(1)} %)</p>
                </div>

                <div className='right'>
                    <h3>Sentiment distribution</h3>
                    <Description_piechart />
    
                </div>

            </div>

            <div className='presentaion-nav'>
                <Button clickHandler={backwardHandler}>&lt;
                </ Button>
                <Button clickHandler={forwardHandler}>Next
                </ Button>
            </div>
        </div>
    )
}

export default Slide3