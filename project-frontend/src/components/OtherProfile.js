import React from 'react'
import accounting from 'accounting'
const OtherProfile = (props) => {


    const followHandler = () => {
        props.followHandler(props.user.id)
    }


    const unfollowHandler = () => {
        props.unfollowHandler(props.user.id)
    }

    const neededUsers = () => {
        if(props.currentuser.followeds)
        {
        let new_arr = props.currentuser.followeds.map(obj=>{return obj.id})
        if(new_arr.includes(props.user.id))        
        { return <button onClick={unfollowHandler}>Unfollow</button>}  
        else{ return <button onClick={followHandler}>Follow</button> }
        }
    }

    const renderPosts = () => {
        let acts = []
        acts = [...props.user.posts, ...props.user.companies, ...props.user.active_relationships, ...props.user.passive_relationships]
        let sorted_acts = (acts.sort(function(a, b) {
            return new Date(b.created_at) - new Date(a.created_at)
        }))
        return sorted_acts.map(obj => { 
                if(obj.money_raised >= 0)
                {return (
                    <li>Started a Company - "{obj.name}"
                    <br/>
                    Amount Raised: {obj.money_raised}
                    <p>{obj.info}</p>
                    <br/>
                    {new Date(obj.created_at).toString()}
                    <br/>
                    </li>
                )}
                else if(obj.poster_id)
                {return (
                    <li><strong>Made a post </strong> "{obj.title}"
                    <br/>
                    <p>{obj.content}</p>
                    <br/>
                    {new Date(obj.created_at).toString()}
                    <br/>
                    </li>
                )}
                else if(obj.follower_id === props.user.id)
                {return (
                    <li><strong>Followed </strong>
                    "{props.user.followeds.filter(e => e.id === obj.followed_id)[0].username}"
                    <br/>
                    {new Date(obj.created_at).toString()}
                    <br/>
                    </li>
                )}
                else if(obj.followed_id === props.user.id)
                {return (
                    <li><strong>Was Followed By</strong>
                    "{props.user.followers.filter(e => e.id === obj.follower_id)[0].username}"
                    <br/>
                    {new Date(obj.created_at).toString()}
                    <br/>
                    </li>
                )}
        })
    }

    return (
        <div className="profile-page" key={props.user.id}>
            <div className="profile-container">
                <label>Username</label>
                <br/>
                {props.user.username}
                <br/>
                <label>First Name</label>
                <br/>
                {props.user.first_name}
                <br/>
                <label>Last Name</label>
                <br/>
                {props.user.last_name}
                <br/>
                <label>Occupation</label>
                <br/>
                {props.user.occupation}
                <br/>
                <label>Education</label>
                <br/>
                {props.user.education}
                <br/>
                <label>Info</label>
                <br/>
                {props.user.info}
                <br/>
                <label>Investor?</label>
                <br/>
                {props.user.investor ? <div>Yes</div> : <div>No</div>}
                <br/>
                <label>Investment Fund</label>
                <br/>
                {accounting.formatMoney(props.user.investment_fund)}
                <br/>
            </div>
            { neededUsers()}
            <div className="activity">
            <h2>Activity</h2>
            <ul>
            {renderPosts()}
            </ul>
            </div>
    </div>
    )
}

export default OtherProfile