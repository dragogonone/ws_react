import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'
import ToggleDisplay from 'react-toggle-display';
import Modal from './Modal';
import Header from './Header.js'
export default class App extends Component {
  constructor(props) {
    super(props)
    // 状態の定義
    this.state = { message: "Reactのシンプルなコンポーネントです" }
  }

  componentDidMount() {
    this.fetchPortalData()
    this.setModalContents()
  }

  fetchPortalData() {
    // Create headers
    let headers = new Headers()
    headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
    // Call API
    fetch("https://www.wantedlyapp.com/api/intern/portal", { headers })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(json) // 受け取った内容がコンソールに出力される
        this.setState({
          data: json
        })
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
    // 見た目の定義
    let data = this.state.data;
    let contents = this.state.contents;
    if (!data) {
      return <div><img src="http://www.skipso.com/images/loading.gif" /></div>
    }
    let popularProject = this.state.data.data.sections[3]
    return (
      <div>
        <PortalSlider>
          { popularProject.projects.map((project) => {
            return <PortalProject project={project} key={project.id} />
          }) }
        </PortalSlider>
      </div>
    )
  }
}
