import React, { Component } from 'react'
import NewsItem from '../newsItem/NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>News Monkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" decription="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" decription="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" decription="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" decription="mydesc" />
                    </div>
                </div>

            </div>
        )
    }
}

export default News