import Button from './Button';


function Slide2({forwardHandler, backwardHandler}) {

    return (
        <div className='slide2'>
            <div className='presentation-title'>
                <img id="logo" src="https://www.sentisquare.com/data/img/horse-black.svg" alt="logo" />
                <h2>Content</h2>
            </div>
            
            <p>1. Descriptive statistics</p>
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