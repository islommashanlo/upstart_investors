import React from 'react'

class GetStarted extends React.Component{
   state ={
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        education: "",
        occupation: "",
        info: "",
        investment_fund: 0,
        avatar: "",
        
        investor: false
    }

    renderInvestmentFund = () => {

        if(this.state.investor === true){
        return  <div>
            <label>Investment Fund</label>
            <br/>
            <input type="number"
                name="investment_fund" 
                value={this.state.investment_fund}
                onChange={this.changeHandler}
            />
            <br/>
        </div> 
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.signUpHandler(this.state)
    }

    isInvestor = () => {
        this.setState(prevState => { 
            return {...prevState, investor: !prevState.investor}
        })
    }
    handleImageChange = (e) => {
        if (e.target.files[0]) this.setState({ avatar: e.target.files[0] });
        console.log(e.target.files)
    };
    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.submitHandler}>
                <label>Username</label>
                <br/>
                <input type="text"
                    name="username" 
                    placeholder="username" 
                    value={this.state.username}
                    onChange={this.changeHandler}

                />
                <br/>
                <label>Password</label>
                <br/>
                <input type="password"
                    name="password" 
                    placeholder="password" 
                    value={this.state.password}
                    onChange={this.changeHandler}
                />
                <br/>
                <label>First Name</label>
                <br/>
                <input type="text"
                    name="first_name" 
                    placeholder="first name" 
                    value={this.state.first_name}
                    onChange={this.changeHandler}
                />
                <br/>
                <label>Last Name</label>
                <br/>
                <input type="text"
                    name="last_name" 
                    placeholder="last name" 
                    value={this.state.last_name}
                    onChange={this.changeHandler}
                />
                <br/>
                <label>Education</label>
                <br/>
                <input type="text"
                    name="education" 
                    placeholder="education" 
                    value={this.state.education}
                    onChange={this.changeHandler}
                />
                <br/>
                <label>Occupation</label>
                <br/>
                <input type="text"
                    name="occupation" 
                    placeholder="occupation" 
                    value={this.state.occupation}
                    onChange={this.changeHandler}
                />
                <br/>
                <label>Info</label>
                <br/>
                <textarea type="text"
                    name="info" 
                    placeholder="info" 
                    value={this.state.info}
                    onChange={this.changeHandler}
                />
                <br/>
                <label>Upload an Avatar Photo</label>
                <br/>
                <input type="file" name="newPhoto"accept="image/png, image/jpeg" onChange={this.handleImageChange} />
                <br/>
                <label>Are you an Investor?</label>
                <br/>
                <input type="checkbox"
                    name="investor" 
                    value={this.state.investor}
                    onChange={this.isInvestor}
                />
                <br/>
                {this.renderInvestmentFund()}
                <input type="submit"/>
            </form>
        )
    }
}

export default GetStarted