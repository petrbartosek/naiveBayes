import Button from './Button';

function Slide8({ forwardHandler, backwardHandler }) {

    return (
        <div className='slide8'>
            <div className='presentation-title'>
                <img id="logo" src="https://www.sentisquare.com/data/img/horse-black.svg" alt="logo" />
                <h2>6. Thank you for your attention</h2>
            </div>
            <div className='content-container'>
                <div className='left'>
                    
                    <h4>If you have any questions, please contact me at any time. </h4>
                    <br />
                    <br />
                    
                    <p>Petr Bartošek</p>
                    ----------------------------------
                    <p>bartosek.petr@gmail.com</p>
                    <p>+420 607 177 293</p>
                    
                    <br />
                    <br />
                    <br />
                </div>

                <div className='right'>
                    
                </div>
            </div>

            <div className='presentaion-nav'>
                <Button clickHandler={backwardHandler}>&lt;
                </ Button>
            </div>
        </div>
    )
}

export default Slide8