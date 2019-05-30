import React from 'react';

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
    this.img_urls = [
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpds.exblog.jp%2Fpds%2F1%2F201604%2F27%2F40%2Fb0325640_9363771.jpg&imgrefurl=https%3A%2F%2Fmutsuzukan.exblog.jp%2F25718728%2F&docid=HafPPgqoXX6ETM&tbnid=2L1rQ5nk2-_w9M%3A&vet=10ahUKEwjCqfuVjcPiAhXnG6YKHfh1A8AQMwhaKAYwBg..i&w=500&h=367&bih=772&biw=1440&q=%E8%A6%96%E5%8A%9B%E5%9B%9E%E5%BE%A9&ved=0ahUKEwjCqfuVjcPiAhXnG6YKHfh1A8AQMwhaKAYwBg&iact=mrc&uact=8",
      "http://役立つ情報ブログ.com/wp-content/uploads/2015/12/a0981e4bece5badc1b7fd353cf567c1f.jpg",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
      "https://469up.com/wp-content/uploads/2015/04/20160810_bell2-e1503304329476.png",
    ];
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
        <div className='main'>
          <h1>
            {this.state.count}日
          </h1>
          <div>
            <img src={this.img_urls[this.state.count-1]} />
          </div>
          <button onClick={() => {this.handleClick()}}>カレンダーをめくる</button>
        </div>
      </div>
    );
  }
}

export default Date;
