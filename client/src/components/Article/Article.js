import React from "react";
import "./Article.css";

const Article = props => (
 
    <div className="col-md-6">
      <div className="divBox">
        <img
          className="img-responsive newsImages"
          src={props.src}
        />
        <p>{props.timeStamp}</p>
        <h3><a target='_blank' href={props.url}>{props.title}</a></h3>
        <p>{props.description}</p>
      </div>
   </div>

)
export default Article;