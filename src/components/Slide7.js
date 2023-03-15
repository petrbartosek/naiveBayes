import Button from './Button';


function Slide7({ forwardHandler, backwardHandler }) {

    return (
        <div className='slide7'>

            <div className='presentation-title'>
                <img id="logo" src="https://www.sentisquare.com/data/img/horse-black.svg" alt="logo" />
                <h2>5. Conclusion & Recommendation</h2>
            </div>

            <div className='content-container'>
                <div className='left'>
                    
                    <p>To be added for live presentation.</p>
                    
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