import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext=createContext()

const ThemeProvider = ({children}) => {

    const [theme,setTheme]=useState("Light")

    const toggleTheme=()=>{
        setTheme((theme)=>(theme==="Light"?"Dark":"Light"))
    }
    
  return (
    
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider