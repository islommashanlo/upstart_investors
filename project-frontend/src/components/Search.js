import React from 'react'

const SearchOrSortForm = ( { searchVal, searchHandler, sortHandler}) => {


    return (
        <div className="search-bar">
            <input className="search" type="text" placeholder="Search..." value={searchVal} onChange={(e) => searchHandler(e.target.value)}/>
            <div className="sort" onClick={sortHandler}>
                Sort By Category
            </div>
        </div>
    )
}
export { SearchOrSortForm }