import React from 'react'
import { Link } from 'react-router-dom'

const Companies = (props) => {

    const renderCompanies = () => {
        return props.companies.map(obj=> {
            return (
            <Link to={`/companies/${obj.id}`}>
            <div key={obj.id}>{obj.name}</div>
            </Link>
            )
        })
    }


    return(
        <div>
        <h3>Startups</h3>
        {renderCompanies()}
        </div>
    )

}

export default Companies