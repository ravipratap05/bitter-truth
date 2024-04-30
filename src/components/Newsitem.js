import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, content, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://i.ytimg.com/vi/3gUq9pzRhdg/maxresdefault.jpg"
                : imageUrl
            }
            alt="..."
            height={200}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{content}...</p>
            <span class="badge rounded-pill text-bg-danger">{source}</span>
            <hr />

            <p className="card-text">
              By {author} on {new Date(date).getDate()}/
              {new Date(date).getMonth() + 1}/{new Date(date).getFullYear()}
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
