import React from 'react'

import { useContext } from 'react';

import  ThemeContext from '../ThemeContext'

const Header = () => {

  const { theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className='Header' style={{backgroundColor: theme === 'light' ?  "lightgrey" : "black", color: theme === 'light' ? "black" : 'white'}}>
        <h1>Countries of the world</h1>
        <p>{theme}</p>
    </div>
  )
}

export default Header