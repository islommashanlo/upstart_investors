import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Companies from '../components/Companies'
import CompanyProfile from '../components/CompanyProfile'
import Startmeup from '../components/Startmeup'

export default class CompanyContainer extends React.Component {

    state = {
        companies: []
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/companies/`)
        .then(resp=>resp.json())
        .then(companies=> this.setState({companies: companies}))
    }

    editHandler = () => {
        console.log("editting")
    }

    render() {
        return(
            <div>
            <Switch>
            <Route path="/companies/:id" render={(routerProps) => {
            let id = parseInt(routerProps.match.params.id)
            if (this.state.companies.length > 0) {
                let foundCompany = this.state.companies.find(el => el.id === id)
                return (<CompanyProfile currentuser={this.props.user} company={foundCompany} editHandler={this.editHandler}/>)
            }

            }} />
            <Route path="/companies" render={()=><Companies currentuser={this.props.user} companies={this.state.companies} />}/>
            </Switch>
        </div>
        )
    }

}