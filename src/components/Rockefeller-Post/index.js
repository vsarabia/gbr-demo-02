import * as React from "react"

const RockefellerPost = ({ title, img, excerpt, author, url="#" }) => {

  let title_element, img_element, excerpt_element, author_element;  
  
  if ( title ) {
    title_element = <h2 class="rockefeller-post__title">{title}</h2>;
  }
  
  if ( img ) {
    img_element =
      <img src={img} class="rockefeller-post__image" />
    ;
  }

  if ( excerpt ) {
    excerpt_element = <p class="rockefeller-post__excerpt">{excerpt}</p>;
  }
  
  if ( author ) {
    author_element =
      <div class="rockefeller-post__author">
        <span class="rockefeller-post__author__by">By </span>
        <span class="rockefeller-post__author__name">{author}</span>
      </div>;
  }

  return (
    <div class="rockefeller-post">
      <a href={url} class="rockefeller-post__link">
        {img_element}
        {title_element}
        {excerpt_element}
        {author_element}    
      </a>
    </div>
  );
};


RockefellerPost.defaultProps = {
  title: `Default Title`,
  img: "https://cdn.gobankingrates.com/wp-content/uploads/2021/05/male-student-on-laptop-campus_iStock-1098428498.jpg?quality=75&w=800",
}

export default RockefellerPost
