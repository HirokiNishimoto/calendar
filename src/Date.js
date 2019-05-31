import React from 'react';
import img_urls from './materials';
>>>>>>> aa56c07fca15f85b31595cbad3c9c0569c1af7b4

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
    this.img_urls = img_urls;
  }

  // handleClickメソッドを定義してください
  handleClick() {
    if (this.state.count < 31) {
      this.setState({count : this.state.count + 1})
    } else {
      this.setState({count : this.state.count = 1})
    }

  }


  render() {

    return (
      <div className='main-wrapper'>
        <div className='main-left'>
          <h1>
            今日は {this.state.count}日です
          </h1>
          <p>
            <button onClick={() => {this.handleClick()}}>カレンダーをめくる</button>
          </p>
        </div>
        <div className="main-right">
            <div className="scroll-area">
              <div className="describe-image">ぼんやりと見てください。何が見えますか？</div>
              <div className="box box__bg_gray">
                <img src={this.img_urls[this.state.count-1]} />
              </div>
              <div className="describe-image">ぼんやりと見てください。何が見えますか？</div>
              <div className="box box__bg_gray">

                <img src={this.img_urls[this.state.count]} />
              </div>
              <div className="describe-image">ぼんやりと見てください。何が見えますか？</div>
              <div className="box box__bg_gray">

                <img src={this.img_urls[this.state.count+1]} />
              </div>
            </div>
          </div>




      </div>


    );
  }
}

export default Date;
