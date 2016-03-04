import React, { Component } from 'react'

import Modal from './Modal';
//import Modal from 'lib/react-modal.min.js'
//var Popup = require('react-popup');


export default class App extends Component {

    constructor(props) {
        super(props)
    }

    //最初に自動的に呼ばれる
    componentDidMount() {
        this.fetchPortalData()
        this.setModalContents()
    }

    async fetchPortalData() {
        // Create headers
        let headers = new Headers()
        headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
        let res = await fetch("https://www.wantedlyapp.com/api/intern/portal", { headers })
        let json = await res.json()
        this.setState({
            data: json
        })
    }

    setModalContents(){
        this.setState({
            contents : {
                title : "タイトル",
                main_img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Japanese_Hiragana_kyokashotai_A.svg/150px-Japanese_Hiragana_kyokashotai_A.svg.png",
                description : "詳細説明",
                logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Japanese_Hiragana_kyokashotai_A.svg/150px-Japanese_Hiragana_kyokashotai_A.svg.png",
                companyName : "企業名"
            }
        })
    }


    render() {
        let contents = this.state.contents;
    return(
      <div>
        <Modal contents={contents}>
        <div></div>
        </Modal>
      </div>
    )
  }
}
