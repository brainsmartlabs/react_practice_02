import React, { Component } from 'react'
import NewsItem from '../newsItem/NewsItem'

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            loading: true,
            page: 1,
            totalArticles: 0
        };
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
    }

    async componentDidMount() {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=202c614376af4b86b49c2823e2631480&page=1&pageSize=${this.props.pageSize}`);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loading: false,
            page: 1,
            totalArticles: data.totalResults
        });
    }


    async handlePreviousClick() {

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=202c614376af4b86b49c2823e2631480&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loading: false,
            page: this.state.page + 1,
            totalArticles: data.totalResults
        });
    }

    async handleNextClick() {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=202c614376af4b86b49c2823e2631480&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loading: false,
            page: this.state.page - 1,
            totalArticles: data.totalResults
        });

    }

    render() {

        return (
            <div className='container my-3'>
                <h2>News Monkey - Top Headlines</h2>
                <div className="row">
                    {
                        (!this.state.loading) ? this.state.articles.map((item, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <NewsItem
                                        title={item.title.slice(0, 45)}
                                        decription={(item.description) ? item.description.slice(0, 88) : "Click for more Details"}
                                        imageURL={(item.urlToImage != null) ? item.urlToImage : "https://theleaflet.in/wp-content/uploads/2021/09/IT-Dept.jpg"}
                                        newsURL={item.url}
                                    />
                                </div>
                            )
                        }) : <h2>Loading...!!</h2>
                    }
                </div>
                <br />
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>&larr; Previous</button>
                    <button disabled={this.state.page >= (Math.ceil(this.state.totalArticles/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News