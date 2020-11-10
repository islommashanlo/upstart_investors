import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Welcome from '../components/Welcome'
import Profile from '../components/Profile'
import ConnectionsContainer from './ConnectionsContainer'
import MyCircle from './MyCircle'
import CompanyContainer from './CompanyContainer'
import Startmeup from '../components/Startmeup'
import PledgedInvestors from '../components/PledgedInvestor'


 class Main extends React.Component {

    followHandler = (id) => {
        let options = {
            method: "POST",
            headers: {
            "content-type": "application/json",
            "accepts": "application/json"
            },
            body: JSON.stringify({
                relationship: {
                    followed_id: id,
                    follower_id: this.props.currentuser.id,
                }
            })
        }
        fetch(`http://localhost:3000/relationships`, options)
        .then(resp => resp.json())
        .then(console.log)
    }

    unfollowHandler = (id) => {
        let found_rel = this.props.currentuser.active_relationships.filter(obj=>obj.followed_id === id)[0]
        let options = {
            method: "DELETE",
            headers: {
            "content-type": "application/json",
            "accepts": "application/json"
            }
        }
        fetch(`http://localhost:3000/relationships/${found_rel.id}`, options)
        .then(resp => resp.json())
        .then(console.log)
    }

    render() {
        return (
            <div>
            <Switch>
                <Route path="/connections" render={()=><ConnectionsContainer user={this.props.currentuser} unfollowHandler={this.unfollowHandler} followHandler={this.followHandler}/>}/>
                <Route path="/my_circle" render={()=> this.props.currentuser.followers ? <MyCircle followers={this.props.currentuser.followers} followeds={this.props.currentuser.followeds}/> : <div>No Connections</div> }/>
                <Route path="/profile" render={()=><Profile api={this.props.currentuser}/>}/>
                <Route path="/companies" render={()=> <CompanyContainer user={this.props.currentuser}/>}/>
                <Route path="/startup" render={()=> <Startmeup currentuser={this.props.currentuser}/>}/>
                <Route path="/pledged_investors" render={()=> <PledgedInvestors currentuser={this.props.currentuser}/>}/>
                <Route path="/" component={Welcome}/>
            </Switch>
            </div>
        )
    }
}


export default Main