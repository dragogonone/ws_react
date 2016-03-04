import React from 'react';
import SkyLight from 'react-skylight';

import styles from './Modal.css'

export default class Modal extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //     showModal();
  // }

  showModal(){
       this.refs.simpleDialog.show()
  }

  render() {
    let contents = this.props.contents;

    return (
      <div>
        <section>
          <button onClick={this.showModal.bind(this)}>{contents.title}</button>
        </section>

        <SkyLight dialogStyles={styles.myDialogStyles} hideOnOverlayClicked ref="simpleDialog">
            <div className={styles.base}>
                <div className={styles.title}>{contents.title}</div>
                <div className={styles.main_img}><img src={contents.main_img} alt="メイン画像"/></div>
                <div className={styles.description}>{contents.description}</div>
                <div className={styles.company}>
                    <img className={styles.logo} src={contents.logo} alt="企業ロゴ"/>
                    <span className={styles.companyName}>{contents.companyName}</span>
                </div>
            </div>
        </SkyLight>
      </div>
    )
  }
}

Modal.displayName = 'Modal';
