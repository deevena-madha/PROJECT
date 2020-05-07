import React from "react";
const Book = props => {
    return (
        
        <div className=" mb-3 row shadow mt-4">
            <div className="col-lg-3 pl-0">
                <img src={props.book.url} alt="Image" width="200px" height="200px" />
            </div>
            <div className="col-lg-9">
                <h3 className="text-primary"> {props.book.title}</h3>
                <p>Page Count: {props.book.pageCount}</p>
                <p>Published Date: {props.book.publishedDate}</p>
                <p>Authors: {props.book.authors}</p>
                <p>Categories: {props.book.genre}</p>

            </div>
        </div>
    );
};

export default Book;

