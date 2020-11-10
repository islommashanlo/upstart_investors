import React from 'react'
import Select from 'react-select'

class Startmeup extends React.Component{
    state ={
        name: "",
        info: "" ,
        industries: [],
        chosen_industries: []
     }

 
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
 
    handleInputChange = (newValue) => {
        return this.setState(prevState => {return {...prevState, chosen_industries: newValue}})
    };

    submitHandler = (e) => {
        e.preventDefault()
        let options = {
            method: "POST",
            headers: {
                // "Authorization": `Bearer ${token}`,
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({company: {...this.state}})
         }
        fetch(`http://localhost:3000/companies/`, options)
        .then(resp=>resp.json())
        .then(new_c => {
            fetch(`http://localhost:3000/user_companies/`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accepts": "application/json"
                },
                body: JSON.stringify({user_company: {
                    company_id: new_c.id,
                    user_id: this.props.currentuser.id
                }})
            })
            .then(resp=> resp.json())
            .then(console.log)
            this.state.chosen_industries.map(obj=> {
                fetch(`http://localhost:3000/company_industries/`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "accepts": "application/json"
                    },
                    body: JSON.stringify({company_industry: {
                        company_id: new_c.id,
                        industry_id: obj.value.id
                    }})
                })
                .then(resp=> resp.json())
                .then(console.log)
            })
        })   
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/industries/`)
        .then(resp=>resp.json())
        .then(inds =>  this.setState(prevState => { 
            return {...prevState, industries: inds}
        }))
    }

    renderIndustries = () => {
        let options = this.state.industries.map(obj => { return ({ value: obj, label: obj.name })
        })
        return  (<Select
        defaultValue={[options[0]]}
        isMulti
        name="industries"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={this.handleInputChange}
        />)
    }
    
 
    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.submitHandler}>
                <label>Company Name</label>
                <br/>
                <input type="text"
                    name="name" 
                    placeholder="name" 
                    value={this.state.name}
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
                {this.renderIndustries()}
                <input type="submit"/>
            </form>
        )
    }
}
 
export default Startmeup