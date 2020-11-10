import React from 'react'
// import { useHistory } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    
    
    submitHandler = (e) => {
        e.preventDefault()
        // const history = useHistory();
        this.props.logInHandler(this.state)
        this.setState({ username: '', password: '' })
        // history.push('/');
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render(){
        return (
            <div className="log-in-form">
                <form className= "log-in" onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default Login