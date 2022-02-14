import * as React from "react"
import SectionHeader from "../section-header"
import RockefellerPost from "../Rockefeller-Post"

const SectionWithCards = ({}) => {

  return (
    <>
        <SectionHeader label="Section with Cards and heading" />
        <div class="section-with-cards">
            <RockefellerPost
                author="Marco"
                title="First post"
            />
            <RockefellerPost
                author="Emeri"
                title="A different post"
            />
            <RockefellerPost
                author="Emeri"
                title="Post with a different image"
                img="https://cdn.gobankingrates.com/wp-content/uploads/2021/09/young-woman-on-laptop-working-sitting-couch-paying-bills_iStock-1326092252.jpg?w=800"
            />
            <RockefellerPost
                author="Janyn"
                title="A last post."
            />
        </div>
    </>
  );
};


SectionWithCards.defaultProps = {

}

export default SectionWithCards
