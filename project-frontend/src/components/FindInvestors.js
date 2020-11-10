import React from 'react'

class FindInvestors extends React.Component {

    state = {
        investors: []
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/investors`)
        .then(resp=>resp.json())
        .then(invs=> this.setState({investors: invs}))
    }


    render() {
        return (
           this.state.investors.map(obj=> {
               return (
               <div>{obj.first_name}</div>
               )
           })
        )
    }
}

export default FindInvestors