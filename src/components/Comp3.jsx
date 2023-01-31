import React from 'react';
import vid1 from '../material/vid1.png'
import vid2 from '../material/vid2.png'
import vid3 from '../material/vid3.png'

const Comp3 = () => {
  return (
    <div className='comp3'>
      <img className='img1' src={vid1} alt="vid1" />
      <img src={vid2} alt="vid2" />
      <img src={vid3} alt="vid3" />
    </div>
  );
}

export default Comp3;
