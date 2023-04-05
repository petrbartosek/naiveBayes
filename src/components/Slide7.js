import Button from './Button';
import Logo from '../assets/Logo'


function Slide7({ forwardHandler, backwardHandler }) {

    return (
        <div className='slide7'>

            <div className='presentation-title'>
                <Logo />
                <h2>5. Conclusion & Recommendation</h2>
            </div>

            <div className='content-container'>
                <div className='left'>

                        <p>1. Well structured data sample (N=5274).</p>
                        <p>2. Final sentiment 80 : 20.</p>
                        <p>3. No influence of gender.</p>
                        <p>4. No influence of age.</p>
                        <p>5. Development areas: queues, self-checkout, price tags.</p>

                </div>

                <div className='right'>

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

export default Slide7