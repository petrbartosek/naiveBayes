import Button from './Button';


function Slide1({forwardHandler}) {


    return (
        <div className='slide1'>
            
            <img id="logo" src="https://www.sentisquare.com/data/img/horse-black.svg" alt="logo" />
            <br />
            <h1>Customer Feedback Analysis</h1>
            <br />
            <p>fictional client:</p>
            <br />
            <img id="clientLogo" src="https://www.sentisquare.com/data/img/albert.png" alt="logo" />
            <Button clickHandler={forwardHandler}>start
            </ Button>
        </div>
    )
}

export default Slide1