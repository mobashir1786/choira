import React from 'react'
import flogo from '../material/Vector.png';
import record from '../material/Ellipse.png'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerleft">
        <div className="buttons">
          <div className='btn button1' ><img src={flogo} alt="flogo" /></div>
          <div className='btn button2'><span>0004</span><span>Bar</span></div>
          <div className='btn button3'><span>1</span><span>Beat</span></div>
          <div className='btn button4'><span>- 120 +</span><span>Tempo</span></div>
          <div className='btn button5'><span>4/4</span><span>Cmaj</span></div>
        </div>
        <img src={record} alt="record" />
      </div>
      <div className="footerright">
        <button className='endBtn'>End Jam</button>
        <div className="buttons">
          <div className="btn1 material-symbols-outlined">mic</div>
          <div className="btn1 material-symbols-outlined">videocam</div>
          <div className="btn1 material-symbols-outlined">volume_up</div>
          <div className="btn1 button5 material-symbols-outlined">more_horiz</div>
        </div>
      </div>
    </div>
  )
}
