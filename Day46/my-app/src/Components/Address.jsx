import React, { useContext } from 'react'
import AppContext from '../AppContext'

const Address = () => {

  const {data}=useContext(AppContext)

  return (
    <div style={{backgroundColor:"lightcyan", width:"25%"}}>
        <h1>Address</h1>
        <h2>{data}</h2>
    </div>
  )
}

export default Address

//if we are using props,then we need to pass data from App.js->Contact.jsx->Phone.jsx->Mail.jsx->Address.jsx... it's called Props Drilling.
//if we are using useContext,we can directly pass data from App.js->Address.jsx 