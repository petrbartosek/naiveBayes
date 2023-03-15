import Button from './Button';
import AgeGroupsBarChart from './graphs/AgeGroupsBarChart'


function Slide5({ forwardHandler, backwardHandler }) {

    return (
        <div className='slide5'>
            <div className='presentation-title'>
                <img id="logo" src="https://www.sentisquare.com/data/img/horse-black.svg" alt="logo" />
                <h2>3. Sentiment by age groups</h2>
            </div>

            <div className='content-container'>
                <div className='left'>
                    <p># Feedbacks: 5274 </p>
                    ----------------------------------
                    <p>Age group &#60; 30: 1616 ({(1616 / 5274 * 100).toFixed(1)} %)</p>
                    <p className='positive'> - Positive: 1319 ({(1319 / 1616 * 100).toFixed(1)} %)</p>
                    <p className='negative'> - Negative: 297 ({(297 / 1616 * 100).toFixed(1)} %)</p>
                    <p className='neutral'> - Neutral: 0 ({(0 / 1616 * 100).toFixed(1)} %)</p>

                    ----------------------------------
                    <p>Age group 30 - 60: 1900 ({(1900 / 5274 * 100).toFixed(1)} %)</p>
                    <p className='positive'> - Positive: 1496 ({(1496 / 1900 * 100).toFixed(1)} %)</p>
                    <p className='negative'> - Negative: 404 ({(404 / 1900 * 100).toFixed(1)} %)</p>
                    <p className='neutral'> - Neutral: 0 ({(0 / 1900 * 100).toFixed(1)} %)</p>

                    ----------------------------------
                    <p>Age group 60+: 1758 ({(1758 / 5274 * 100).toFixed(1)} %)</p>
                    <p className='positive'> - Positive: 1438 ({(1438 / 1758 * 100).toFixed(1)} %)</p>
                    <p className='negative'> - Negative: 320 ({(320 / 1758 * 100).toFixed(1)} %)</p>
                    <p className='neutral'> - Neutral: 0 ({(0 / 1758 * 100).toFixed(1)} %)</p>
                </div>

                <div className='right'>
                    <p>Sentiment by age groups</p>
                    <AgeGroupsBarChart />
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

export default Slide5