import React from 'react'
import { Link } from 'react-router-dom'

const MyConnections = (props) => {

    return (
    <div className="my-connections">
        <div className="followeds">
            <h3>Following</h3>
            {props.followeds.map(obj=> 
            <Link to={`connections/${obj.id}`}>
            <div key={obj.id}>{obj.username}</div>
            </Link>
            )}
        </div>  
        <div className="followers">
            <h3>Followers</h3>
            {props.followers.map(obj=> 
            <Link to={`connections/${obj.id}`}>
            <div key={obj.id}>{obj.username}</div>
            </Link>
            )}
        </div>
    </div>
    )
}

export default MyConnections