import React from 'react'
import { Link } from 'react-router-dom'
import { SearchOrSortForm } from './Search'

class Connections extends React.Component {

    state = {
        searchVal: '',
        sort: false
    }

    getSortedCategoriesByName = () => {
        if(this.props.users) { 
            let categories = (this.props.users) //combine all categories into one flat array
            return categories.sort((catA, catB) => {
                let nameA = catA.username.toUpperCase()
                let nameB = catB.username.toUpperCase()
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }
    }

    sortHandler = () => {
        this.setState(prevState => {
            return { sort: !prevState.sort }
        })
    }

    searchHandler = (value) => {
        this.setState({ searchVal: value })
    }

    renderUsers = (tList) => {
        let us = this.props.users.filter( transac => transac.username.toLowerCase().includes(this.state.searchVal.toLowerCase())).filter(obj=> obj.investor === false)
        return us.map(obj=> {
            return (
            <Link to={`/connections/${obj.id}`}>
            <div key={obj.id}>{obj.username}</div>
            </Link>
            )
        })
    }

    renderInvestors = () => {
        let ins = this.props.users.filter( transac => transac.username.toLowerCase().includes(this.state.searchVal.toLowerCase())).filter(obj=> obj.investor === true)
        return ins.map(obj=> {
            return (
                <Link to={`/connections/${obj.id}`}>
                <div key={obj.id}>{obj.username}</div>
                </Link>
            )
        })
    }

    render() {
        return(
            <div>
            <SearchOrSortForm searchVal={this.state.searchVal} searchHandler={this.searchHandler} sortHandler={this.sortHandler}/>
            <h3>Users</h3>
            {this.renderUsers()}
            <h3>Investors</h3>
            {this.renderInvestors()}
            </div>
        )
    }
}

export default Connections