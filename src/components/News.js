import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5c01283cd9f424aab88e617f5a0e761&page=${this.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      alert("No more pages for Top Headlines!");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=e5c01283cd9f424aab88e617f5a0e761&page=${
        this.state.page + 1
      }&pageSize=20`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePreviousClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e5c01283cd9f424aab88e617f5a0e761&page=${
      this.state.page - 1
    }&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h2 className="text-center">BitterTruth - Top Headlines</h2>

          <hr className="my-4" />
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 25) : ""}
                      content={
                        element.description
                          ? element.description.slice(0, 30)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={
                this.state.page < 1
                  ? alert("You are on First page, Can't go back!")
                  : false
              }
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
