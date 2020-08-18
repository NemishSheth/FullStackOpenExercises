import React from 'react'

const Filter = (props) =>{
    return(
        <form>
        Filter Contacts with <input value={props.searchName} onChange={props.handleSearchName} placeholder="Enter Name"/>
      </form>
    )
}
export default Filter