import React from 'react';
import Header from './Header';
import Main from './Main';
import Date from './Date';
import Footer from './Footer';



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Date/>
        <Footer/>
      </div>
    );
  }
}

export default App;
