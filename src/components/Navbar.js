import React from 'react'
import '../navbar.css'
//import PropTypes from 'prop-types'
function Navbar(props){
    return(
    <>
    <header style={props.mode}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
        <input type="checkbox" name="check" id="check" onClick={props.toggle}  />
    </header>
    </>
    )
}
export default Navbar
/*Navbar.PropTypes={title:PropTypes.string,
                  abc:PropTypes.string,
                  number:PropTypes.number  
}*/