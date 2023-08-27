import React from 'react';
import Logo from '../Logo/logo';
import Button from '../Button/Button';
import styles from './NavBar.module.css';

import SearchBar from '../SearchBar/Search';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <SearchBar/>
        <Button children="Give Feedback"/>
      
    </nav>
  )
}

export default NavBar
