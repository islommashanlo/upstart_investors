import React from 'react'
import CompanyProfile from '../components/CompanyProfile'

class Startups extends React.Component {

    renderStartups = () => {
        return this.props.startups.map(obj=> {
        return <CompanyProfile obj={obj}/>
        })
    }

    render() {
        return (
            this.renderStartups()
        )
    }
}

export default Startups