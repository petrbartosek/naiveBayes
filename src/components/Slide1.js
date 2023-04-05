import Button from './Button';
import Logo from '../assets/Logo'
import LogoHubert from '../assets/hubert.png'


function Slide1({forwardHandler}) {


    return (
        <div className='slide1'>
            
            <Logo />
            <br />
            <h1>Customer Feedback Analysis</h1>
            <br />
            <p>fictional client:</p>
            <br />
            <img id="clientLogo" src={LogoHubert} alt="logo" />
            
            <Button clickHandler={forwardHandler}>start
            </ Button>
        </div>
    )
}

export default Slide1