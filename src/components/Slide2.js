import Button from './Button';
import Logo from '../assets/Logo'


function Slide2({forwardHandler, backwardHandler}) {

    return (
        <div className='slide2'>
            <div className='presentation-title'>
            <Logo />
             <h2>Content</h2>
            </div>
            
            <p>1. Quick results</p>
            <p>2. Sentiment by gender</p>
            <p>3. Sentiment by age</p>
            <p>4. Discovery mode - topics</p>
            <p>5. Conclusion & recommendation</p>
            <p>6. Contact</p>

            <div className='presentaion-nav'>
                <Button clickHandler={backwardHandler}>&lt;
                </ Button>
                <Button clickHandler={forwardHandler}>Next
                </ Button>
            </div>


        </div>
    )
}

export default Slide2