import React from 'react'
import accounting from 'accounting'
class CompanyProfile extends React.Component {
   
    state = {
        company: this.props.company,
        showForm: false,
        amount: 0
    }
    
    submitHandler = (e) => {
        console.log(e)
        e.preventDefault()
        let options = {
            method: "PATCH",
            headers: {
            "content-type": "application/json",
            "accepts": "application/json"
            },
            body: JSON.stringify({
                company: {
                    money_raised: this.state.amount,
                    user_id: this.props.currentuser.id
                }
            }) 
        }
        fetch(`http://localhost:3000/companies/${this.state.company.id}`, options)
        .then(resp=>resp.json())
        .then(new_c => {
            this.setState({
                company: new_c
            })
        })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    hideForm = () => {
        this.setState(prevState => {
            return { showForm: !prevState.showForm }
        })
    }
    pledgeForm = () => {
        if(this.state.showForm === true)
        { return (
            <form onSubmit={this.submitHandler}>
                <input type="number" placeholder="amount" name="amount" value={this.state.amount} onChange={this.changeHandler}/>
                <input type="submit" />
                <h3 onClick={this.hideForm}>x</h3>
            </form>
        )
        }
    }

    renderPledgeButton = () => {
        console.log(this.state)
        if(this.props.currentuser.investor === true)
        {return <button onClick={this.hideForm}>PLEDGE</button>}
    }

    render() {
        console.log(this.state)
        return (
            <div key={this.state.company.id}>
                Company Name: {this.state.company.name}
                <br/>
                Raised: {accounting.formatMoney(this.state.company.money_raised)}
                <br/>
                Info: {this.state.company.info}
                Stakeholders: {this.state.company.users.map(obj=>obj.username)}
                
                {this.renderPledgeButton()}
                {this.pledgeForm()}
            </div>
        )
    }
}

export default CompanyProfile