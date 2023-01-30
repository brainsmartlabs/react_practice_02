import { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import News from './news/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };

    document.title = `${this.props.category} - NewsMonkey`
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Navbar />
        <LoadingBar color={'#f11946'} height={10} progress={this.state.progress} />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={15} country={'in'} category="general" />} />
          <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={15} country={'in'} category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={15} country={'in'} category="entertainment" />} />
          <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={15} country={'in'} category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={15} country={'in'} category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={15} country={'in'} category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={15} country={'in'} category="technology" />} />
        </Routes>
      </>
    )
  }
}

export default App;
