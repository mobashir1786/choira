import React from 'react'

export default function Header(props) {
    
    return (
        <div className="header">
            <img src="https://choira.io/static/media/choria.96439620.svg" alt="logo" />
            <div className="headerTitle">Friday Night Jam</div>
            <div className="btns">
                <select onChange={(e)=>{props.handleChange(e.target.value)}} name="users" id="cars">
                    <option value="comp1">1</option>
                    <option value="comp2">2</option>
                    <option value="comp3">3</option>
                    <option value="comp4">4</option>
                </select>
                <button>+ invite</button>
            </div>
        </div>
    )
}
