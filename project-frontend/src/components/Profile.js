import React from 'react'
import accounting from 'accounting'
import PostForm from './PostForm'

const Profile = (props) => {

    const renderPosts = () => {
        let acts = []
        acts = [...props.api.pledged_investors, ...props.api.posts, ...props.api.companies, ...props.api.active_relationships, ...props.api.passive_relationships]
        let sorted_acts = (acts.sort(function(a, b) {
            return new Date(b.created_at) - new Date(a.created_at)
        }))
        console.log(sorted_acts.map(obj=> obj.money_raised))
        return sorted_acts.map(obj => { 
                if(obj.pledges)
                {return (
                    <li>
                        {obj.investor.username}  invested <ol>{obj.pledges.map(pl=><li>{pl.amount_pledged} {new Date(pl.created_at).toString()}</li> )}</ol> into:
                        <ol>{obj.companies.map(cs=> <li>{cs.name}</li>)}</ol>
                    </li>
                )}
                if(obj.money_raised >= 0)
                {return (
                    <li>Started a Company - "{obj.name}"
                    <br/>
                    Amount Raised: {accounting.formatMoney(obj.money_raised)}
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
                else if(obj.follower_id === props.api.id)
                {return (
                    <li><strong>Followed </strong>
                    "{props.api.followeds.filter(e => e.id === obj.followed_id)[0].username}"
                    <br/>
                    {new Date(obj.created_at).toString()}
                    <br/>
                    </li>
                )}
                else if(obj.followed_id === props.api.id)
                {return (
                    <li><strong>Was Followed By</strong>
                    "{props.api.followers.filter(e => e.id === obj.follower_id)[0].username}"
                    <br/>
                    {new Date(obj.created_at).toString()}
                    <br/>
                    </li>
                )}
        })
    }


    return (
        <div className="profile-page">
            <div className="profile-container">
                <label>First Name</label>
                <br/>
                {props.api.first_name}
                <br/>
                <label>Last Name</label>
                <br/>
                {props.api.last_name}
                <br/>
                <label>Occupation</label>
                <br/>
                {props.api.occupation}
                <br/>
                <label>Education</label>
                <br/>
                {props.api.education}
                <br/>
                <label>Info</label>
                <br/>
                {props.api.info}
                <br/>
                <label>Investor?</label>
                <br/>
                {props.api.investor ? <div>Yes</div> : <div>No</div>}
                <br/>
                {props.api.investor ? <div><label>Investment Fund</label>
                <br/>
                {accounting.formatMoney(props.api.investment_fund)}
                <br/></div> : "" }
                <div><h4>Write A Post</h4>
                <PostForm user={props.api}/>
                </div>
            </div>
            <div className="activity">
            <h2>Activity</h2>
            <ul>
            {renderPosts()}
            </ul>
            </div>
        </div>
    )
}

export default Profile