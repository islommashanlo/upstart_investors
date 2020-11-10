import React from 'react'
import { Route } from 'react-router-dom'
import MyConnections from '../components/MyConnections'

const MyCircle = (props) => {


    return(
        <Route path="/my_circle" render={()=><MyConnections followers={props.followers} followeds={props.followeds}/>}/>
    )
}

export default MyCircle