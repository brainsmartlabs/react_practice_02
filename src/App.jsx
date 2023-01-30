import { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import News from './news/News';
import { Routes, Route } from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<News key="general" pageSize={15} country={'in'} category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={15} country={'in'} category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={15} country={'in'} category="entertainment" />} />
          <Route path="/health" element={<News key="health" pageSize={15} country={'in'} category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={15} country={'in'} category="science" />} />
          <Route path="/sports" element={<News key="sports" pageSize={15} country={'in'} category="sports" />} />
          <Route path="/technology" element={<News key="technology" pageSize={15} country={'in'} category="technology" />} />
        </Routes>
      </>
    )
  }
}

export default App;
