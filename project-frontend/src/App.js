import React from 'react';
import Main from './containers/Main'
import {Route} from 'react-router-dom';
import './style/App.css'
import TopBar from './containers/TopBar';
import Switch from 'react-bootstrap/esm/Switch';
import Welcome from './components/Welcome';
import About from './components/About';
import ForUsers from './components/ForUsers';
import GetStarted from './components/GetStarted';
import Login from './components/Login'

class App extends React.Component {

    state = {
        user: null
    }

    componentDidMount = () => {
        if(localStorage.token){
            const token = localStorage.getItem("token")
            const url = 'http://localhost:3000/profile/'
            let options = {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }
            fetch(url, options)
                .then(resp => resp.json())
                .then(userData => { this.setState({ user: userData.user }) })
                .catch('Error logging in: ', console.log)
        }
    }

    signUpHandler = (userObj) => {
        const user = {...userObj}
        const url = 'http://localhost:3000/users/'

        const fetchPromise = this.logInToDb(url, "POST", user)
        fetchPromise.then(userData => {
            this.setState({ user: userData.user })
            localStorage.setItem('token', userData.jwt)
        }).catch('Error logging in: ', console.log)
    }

    logInHandler = (userObj) => {
        const user = {...userObj}
        const url = 'http://localhost:3000/login'
        const fetchPromise = this.logInToDb(url, "POST", user)
        fetchPromise.then(userData => {
            this.setState({ user: userData.user })
            localStorage.setItem('token', userData.jwt)
        }).catch('Error logging in: ', console.log)
    }

    logInToDb = (url, method, obj) => {
        let options = {
            method: method,
            headers: {
                // "Authorization": `Bearer ${token}`,
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({user: {...obj}})
        }

        return fetch(url, options)
        .then(resp=>resp.json())
    }

    logOut = () => {
        localStorage.clear()
        this.setState({user: null})
    }
    


    render() {
        return (
            <div>
                <TopBar user={this.state.user} logOut={this.logOut} logInHandler={this.logInHandler} signUpHandler={this.signUpHandler}/>
                {this.state.user ?
                    <Route path="/" render={() => <Main currentuser={this.state.user}/>} />
                :
                    <div>
                    <Switch>
                    <Route path="/for_users" component={ForUsers}/>
                    <Route path="/for_investors" component={Welcome}/>
                    <Route path="/about" component={About} />
                    <Route path="/login" render={() => <Login logInHandler={this.logInHandler}/> }/>
                    <Route path="/signup" render={() => <GetStarted signUpHandler={this.signUpHandler}/>}/>
                    </Switch>
                    </div>
                }           
            </div>  
        );
    }
}

export default App;
