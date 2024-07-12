//import PropTypes from 'prop-types'
import React, { Component } from "react";

export class Newitem extends Component {
  //  static propTypes = {}

  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-4">
        <div className="card" style={{ width: "22rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
          >
            <span
              className=" badge rounded-pill bg-danger "
              style={{
                left: "90%",
                zIndex: "1",
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://c.ndtvimg.com/2022-02/a1ooga8_supreme-court-of-india_650x400_14_February_22.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newitem;
