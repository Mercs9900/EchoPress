import React from "react";
import PropTypes from "prop-types";
export default class NewsItem extends React.Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, sourceName, date } = this.props;
    // setting number of characters in title
    // function setNumberTitle() {
    //   if (title.length > 40) {
    //     return title.substring(0, 40) + "...";
    //   } else {
    //     return title;
    //   }
    // }
    // setting number of characters in description
    function setNumberDescription() {
      
        if (description !== null) {
          if (description.length > 150) {
            return description.substring(0, 150) + "...";
          } else {
            return description;
          }
        } else {
          return "";
        }
      
    }
    return (
      <>
        <div className="card" style={{  margin: "10px 0", }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "230px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h6 className="card-title fw-semibold text-start montserrat" >
              {title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '83%', zIndex: '1', fontSize: "0.63rem"}}> {sourceName} </span>
            </h6>
            <small style={{color: "grey", fontStyle: "italic", textAlign:"left", display:"block"}}>{`[Author: ${author} | Published At: ${date}`}</small><br/>
            <p className="card-text text-start lh-sm montserrat">{setNumberDescription()}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark float-start btnAnim" 
              
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string,
  mode: PropTypes.string,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  date: PropTypes.string,
};
