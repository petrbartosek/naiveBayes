import Button from './Button';
import GenderBarChart from './graphs/GenderBarChart'
import Logo from '../assets/Logo'


function Slide4({ forwardHandler, backwardHandler }) {

    return (
        <div className='slide4'>
            <div className='presentation-title'>
                <Logo />
                <h2>2. Sentiment by gender</h2>
            </div>
            
            <div className='content-container'>
                <div className='left'>
                    <p># Feedbacks: 5274 </p>
                    -------------------------
                    <p>Female: 2911 ({(2911 / 5274 * 100).toFixed(1)} %)</p>
                    <p className='positive'> - Positive: 2344 ({(2344 / 2911 * 100).toFixed(1)} %)</p>
                    <p className='negative'> - Negative: 567 ({(567 / 2911 * 100).toFixed(1)} %)</p>
                    <p className='neutral'> - Neutral: 0 ({(0 / 2911 * 100).toFixed(1)} %)</p>
                    -------------------------
                    <p>Male: 2363 ({(2363 / 5274 * 100).toFixed(1)} %)</p>
                    <p className='positive'> - Positive: 1909 ({(1909 / 2363 * 100).toFixed(1)} %)</p>
                    <p className='negative'> - Negative: 454 ({(454 / 2363 * 100).toFixed(1)} %)</p>
                    <p className='neutral'> - Neutral: 0 ({(0 / 2363 * 100).toFixed(1)} %)</p>
                </div>

                <div className='right'>
                    <h3>Final distribution</h3>
                    <GenderBarChart />
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

export default Slide4