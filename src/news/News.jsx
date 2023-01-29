import React, { Component } from 'react'
import NewsItem from '../newsItem/NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
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
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=202c614376af4b86b49c2823e2631480&page=1&pageSize=${this.props.pageSize}`);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loading: false,
            page: 1,
            totalArticles: data.totalResults
        });
    }


    async handlePreviousClick() {
        console.log("Prev Click");
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=202c614376af4b86b49c2823e2631480&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loading: false,
            page: this.state.page - 1,
            totalArticles: data.totalResults
        });
    }

    async handleNextClick() {
        console.log("Next Click");
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=202c614376af4b86b49c2823e2631480&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loading: false,
            page: this.state.page + 1,
            totalArticles: data.totalResults
        });

    }

    render() {

        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{ margin: '40px 0px' }}>News Monkey - Top Headlines</h2>
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
                                        author={item.author}
                                        date={item.publishedAt}
                                        source={item.source.name}
                                    />
                                </div>
                            )
                        }) : <h2>Loading...!!</h2>
                    }
                </div>
                <br />
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page >= (Math.ceil(this.state.totalArticles / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News