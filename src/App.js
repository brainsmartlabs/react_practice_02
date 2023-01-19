import { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import News from './news/News';
import NewsItem from './newsItem/NewsItem';

class App extends Component {

  async componentDidMount() {
    let res = await fetch('https://newsapi.org/v2/top-headlines?apiKey=202c614376af4b86b49c2823e2631480');
    let data = await res.json();
    console.log(data);
  }

  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}

export default App;
