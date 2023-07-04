import React from 'react'

import { useContext } from 'react';

import ThemeContext from '../ThemeContext';

const Footer = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='Footer' style={{backgroundColor: theme === 'light' ? 'lightgrey' : 'black', color: theme === 'light' ? 'black' : 'white'}}>
        <p> &copy; 2023 405Found</p>
       
    </div>
  )
}

export default Footer