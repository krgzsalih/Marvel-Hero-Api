import React from 'react'
import Marvel from '../../assets/Marvel.png'
import styles from './style.module.scss'

function Header() {
  return (
    <div className={styles.container}>
      <img alt='header' src={Marvel} className={styles.header_image} ></img>
      <h1 className={styles.header_title}>Get To Know Your Favorite Hero</h1>
    </div>
  )
}

export default Header
