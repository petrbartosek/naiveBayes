import { useState } from 'react'
import './Presentation.css'
import './Slide.css'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';

function Presentation() {
  const [page, setPage] = useState(1);
  const forwardHandler = () => {
    setPage( prev => prev + 1);
  }
  const backwardHandler = () => {
    setPage( prev => prev - 1);
  }


  return (
    <div className='presentation'>
      { page === 1 && <Slide1 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
      { page === 2 && <Slide2 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
      { page === 3 && <Slide3 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
      { page === 4 && <Slide4 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
      { page === 5 && <Slide5 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
      { page === 6 && <Slide6 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
      { page === 7 && <Slide7 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
      { page === 8 && <Slide8 forwardHandler={forwardHandler} backwardHandler={backwardHandler}/>}
    </div>
  )
}

export default Presentation