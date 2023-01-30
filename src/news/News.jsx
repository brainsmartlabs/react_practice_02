import React, { Component } from 'react'
import NewsItem from '../newsItem/NewsItem'
import PropTypes from 'prop-types'
import Spinner from '../spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


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

        document.title = `${this.props.category} - NewsMonkey`
    }

    async updateNews(pageNo) {
        this.props.setProgress(0);
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=202c614376af4b86b49c2823e2631480&page=${pageNo}&pageSize=${this.props.pageSize}`);
        this.props.setProgress(30);
        let data = await res.json();
        this.props.setProgress(60);
        this.setState({
            articles: data.articles,
            loading: false,
            page: pageNo,
            totalArticles: data.totalResults
        });
        this.props.setProgress(100);
    }

    componentDidMount() {
        this.updateNews(1);
    }

    fetchMoreData = async () => {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=202c614376af4b86b49c2823e2631480&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
        let data = await res.json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            loading: false,
            page: this.state.page + 1,
            totalArticles: data.totalResults
        });
    }


    render() {

        return (
            <>
                <h2 className='text-center' style={{ margin: '90px 0px 40px 0px' }}>News Monkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                {(!this.state.loading) &&
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length != this.state.totalArticles}
                        loader={<Spinner />}
                    >
                        <div className='container'>
                            <div className="row">
                                {
                                    this.state.articles.map((item, index) => {
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
                                    })
                                }
                            </div>
                        </div>
                    </InfiniteScroll>
                }

            </>
        )
    }
}

export default News