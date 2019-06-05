import React from 'react';
import footer_img from "./footer_img";


class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-logo'>
        <a href="https://github.com/HirokiNishimoto/calender">
          <img src={footer_img}></img>
        </a>
        </div>
        <div className='footer-title'>
          Click to see the source code!
        </div>
      </div>
    );
  }
}

export default Footer;
