import React from 'react';
import img_urls from './materials';
import img_descriptions from './img_descriptions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1, pattern: 1};
    this.img_urls = img_urls;
  }
  handleClick_1() {
    if (this.state.count < 31) {
      this.setState({count : this.state.count + 1, pattern: this.state.pattern})
    } else {
      this.setState({count : this.state.count = 1, pattern: this.state.pattern})
    }
  }
  handleClick_2() {
    this.setState({count : this.state.count, pattern: this.state.pattern*=-1})
  }
  render() {
    return (
      <div className='main-wrapper'>
        <div className='main-left'>
          <h1>
            今日は {this.state.count}日です
          </h1>
          <p>
            <button onClick={() => {this.handleClick_2()}}>画像を切り替える</button>
          </p>
          <p>
            <button onClick={() => {this.handleClick_1()}}>カレンダーをめくる</button>
          </p>
        </div>
        <div className="main-right">
            <div className="describe-image">{img_descriptions[(this.state.pattern+1)/2]}</div>
            <div className="box box__bg_black">
            <img src={this.img_urls[(this.state.pattern+1)/2][this.state.count-1]} />
        </div>
        </div>
      </div>
    );
  }
}

export default Main;
