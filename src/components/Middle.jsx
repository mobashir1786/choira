import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';

const Middle = (props) => {
    // props.user
    return (
        <div className='usersVideo'>
            {props.user==="comp1" && <Comp1/>}
            {props.user==="comp2" && <Comp2/>}
            {props.user==="comp3" && <Comp3/>}
            {props.user==="comp4" && <Comp4/>}
        </div>
    );
}

export default Middle;
