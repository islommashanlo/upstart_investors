import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../img/logo.png'
import profile_pic from '../img/default_profile.jpg'
import '../style/Navbar.css'
import { Button } from 'react-bootstrap'

const TopBar = (props) => {

    if(props.user === null || props.user === undefined)
    {return (
        
        <div className="side-panel">
                <NavLink to='/'><img src={logo} alt='Logo'/></NavLink>
                <NavLink to='/about'>About Us</NavLink>
                <NavLink to='/for_investors'>For Investors</NavLink>
                <NavLink to='/for_users'>For Users</NavLink>
                <div className="user-profile">
                    <div className="login-signup-wrapper">
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/signup'>Get Started</NavLink>
                    </div>    
                </div>
        </div> 
    )}
    else if(props.user.investor === true){
        return <div className="side-panel">
        <NavLink to='/'><img src={logo} alt='Logo'/></NavLink>
        <NavLink to='/my_circle'>Connections</NavLink>
        <NavLink to='/companies'>Find Startups</NavLink>
        <NavLink to='/pledged_startups'>Pledged Startups</NavLink>
        <NavLink to='/connections'>Find Other Users</NavLink>
        <div className="current-profile">
            <div>Welcome, {props.user.first_name}!</div>
            <NavLink to='/profile'><img src={profile_pic} alt='Profile Img'/></NavLink>
            <Button onClick={props.logOut}>Logout</Button>
        </div>
    </div>  
    }
    else{
        return(
            <div className="side-panel">
                <NavLink to='/'><img src={logo} alt='Logo'/></NavLink>
                <NavLink to='/my_circle'>Connections</NavLink>
                <NavLink to='/startup'>Start-Me-Up</NavLink>
                <NavLink to='/pledged_investors'>Pledged Investors</NavLink>
                <NavLink to='/connections'>Find Other Users</NavLink>
                <div className="current-profile">
                    <div>Welcome, {props.user.first_name}!</div>
                    <NavLink to='/profile'><img src={profile_pic} alt='Profile Img'/></NavLink>
                    <Button onClick={props.logOut}>Logout</Button>
                </div>
            </div>  
        )
    }
}

export default TopBar




