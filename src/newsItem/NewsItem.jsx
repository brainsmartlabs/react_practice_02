import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, decription, imageURL, newsURL, author, date, source } = this.props;
    return (
      <div className="card">
        <div style={{
          'display': 'flex',
          'justifyContent': 'flexEnd',
          'position': 'absolute',
          'right': '0'
        }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>

        < img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{decription}...</p>
          <p className="card-text"><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
          <a href={newsURL} target='_blank' rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
      </div >
    )
  }
}

export default NewsItem