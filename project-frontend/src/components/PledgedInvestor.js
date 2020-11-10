import React from 'react'
import accounting from 'accounting'
const PledgedInvestors = (props) => {

    const renderInvs = () => {
        let usernames = props.currentuser.pledged_investors.map(obj=>{
           return  <div>Name: {obj.investor.username}
           <br/>
            <ol>
                Companies: {obj.companies.map(comp=> {return <li>{comp.name}</li>})}
            <br/>
            </ol>
            <ol>
                Pledges: {obj.pledges.map(pl=> {return <li>{accounting.formatMoney(pl.amount_pledged)}</li>}
                )}
            </ol>
            </div>
            
        })
        return usernames
    }
    
    return (
    <div className="pledged-investors">
       {renderInvs()}
    </div>
    )
}

export default PledgedInvestors