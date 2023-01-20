import { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import News from './news/News';


class App extends Component {

  
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={5} />
      </>
    )
  }
}

export default App;
