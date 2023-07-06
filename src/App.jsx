import React, { Component } from "react";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isExpand: false
    }
  }

  handleExpand = () => {
    this.state.isExpand ? this.setState({ isExpand : false}) : this.setState({ isExpand : true })
  }

  render() {
    const { isExpand } = this.state
    if (isExpand) { 
      return (
        <div>
          <h1>Conditional Rendering</h1>
          <input type="button" onClick={this.handleExpand} className="btn btn-showing" value={"Xem giới thiệu"} />
        </div>
      ) 
    } else {
      return (
        <div>
          <h1>Conditional Rendering</h1>
          <input type="button" onClick={this.handleExpand} className="btn btn-hide" value={"Đóng giới thiệu"} />
          <div className="content-block">
            <h3 className="content-heading">Giới thiệu</h3>
            <p className="content-desc">Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props,... mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.</p>
          </div>
        </div>
      )
    }

  }
}

export default App