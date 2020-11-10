import React from 'react'
import Connections from '../components/Connections'
import {Route, Switch} from 'react-router-dom'
import OtherProfile from '../components/OtherProfile'

export default class ConnectionsContainer extends React.Component {

    state = {
        users: []
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/users/`)
        .then(resp=>resp.json())
        .then(users=> this.setState({users: users}))
    }

    getMyConnections = () => {
        let new_arr = [...this.state.users, ...this.state.investors]
        return new_arr
    }

    render() {
        return(
            <div>
                <Switch>
                <Route path="/connections/:id" render={(routerProps) => {
                let id = parseInt(routerProps.match.params.id)
                if (this.state.users.length > 0) {
                    
                    let foundUser = this.state.users.find(el => el.id === id)
                    return (<OtherProfile currentuser={this.props.user} user={foundUser} users={this.state.users} unfollowHandler={this.props.unfollowHandler} followHandler={this.props.followHandler}/>)
                }

                }} />
                <Route path="/connections" render={()=><Connections currentuser={this.props.user} users={this.state.users}/>}/>
                </Switch>
            </div>
        )
    }
}