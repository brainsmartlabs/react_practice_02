import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, decription, imageURL, newsURL } = this.props;
    return (
      <div className="card" style={{ "width": "18rem" }}>
        < img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{decription}...</p>
          <a href={newsURL} target='_blank' rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
      </div >
    )
  }
}

export default NewsItem