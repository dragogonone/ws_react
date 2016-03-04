import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'

export default class App extends Component {
  constructor(props) {
    super(props)
    // 状態の定義
    this.state = { message: "Reactのシンプルなコンポーネントです" }
  }

  componentDidMount() {
    this.fetchPortalData()
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

  render() {
    // 見た目の定義
    let data = this.state.data;
    if (!data) {
      return <div><p>Now Loading...</p></div>
    }
    let popularProject = this.state.data.data.sections[3]
    return (
      <PortalSlider>
        { popularProject.projects.map((project) => {
          return <PortalProject project={project} key={project.id} />
        }) }
      </PortalSlider>
    )
  }
}
