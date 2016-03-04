import React, { Component } from 'react'

import styles from './Header.css'

export default class Header extends Component {

  render() {
    return (
      <div className={styles.base}>
        <div className={styles.sightable}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.linkImage} href={`/`}><img src={`https://de7iszmjjjuya.cloudfront.net/assets/beta/header-logo-5599d92f4d14c5a34ca3cdd33e8314c8.png`} /></a>
            </li>
            <li className={styles.item}><a className={styles.linkItem} href="default.asp">募集を見る</a></li>
            <li className={styles.item}><a className={styles.linkItem} href="news.asp">会社を見る</a></li>
            <li className={styles.item}><a className={styles.linkItem} href="contact.asp">働くを知る</a></li>
          </ul>
        </div>

      </div>
    )
  }
}
