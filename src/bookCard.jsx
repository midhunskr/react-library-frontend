import React from 'react'

const BookCard = (props) => {
    const book = props.book
    return (
            <a className="pb-5" href="">                       
                <div className="book-card-main-page position-relative d-flex align-items-center flex-column">
                <div className="book-card-main-page-base-1" />
                <div className="book-card-main-page-mask position-absolute">
                    <h4>{book.title}</h4>
                    <h6>{book.price}</h6>
                </div>
                </div>
            </a>
    )
}

export  {BookCard};