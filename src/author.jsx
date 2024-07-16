import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BookCard } from './bookCard';

export async function loader( {params} ) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authors/${params.authorId}`)
    const author = await response.json()

    const bookResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/books?author=${params.authorId}`)
    const book = await bookResponse.json()
    return { author, book };
  }

function Author() {
    const {author, book} = useLoaderData()
    
    return (
        <main>
            <div className="wrapper">
                <div className="product-main">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="author-card-main-page py-5">
                        <div className="author-card-main-page-base-1" />
                        <div className="author-card-main-page-mask position-absolute"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="author-title py-5">
                        <div className="author-title-section d-flex align-items-center gap-3">
                            <h3>{author.authorName}</h3>
                        </div>
                        <div className="author-credits pt-2">
                            <div className="author-details-section d-flex justify-content-between py-3">
                            <p className="author-details">Born in:</p>
                            <p className="author-details">Years active:</p>
                            <p className="author-details">Known for:</p>
                            </div>
                            <div className="author-bio">
                            <p>
                                J.K. Rowling, born Joanne Rowling on July 31, 1965, in Yate,
                                England, is a renowned British author best known for
                                creating the Harry Potter series. Her journey to success is
                                a classic rags-to-riches story, having faced numerous
                                rejections from publishers before "Harry Potter and the
                                Philosopher's Stone" was finally published in 1997. The
                                series, which spans seven books, has become one of the
                                best-selling book series in history, enchanting readers of
                                all ages with its magical world and complex characters.
                                Beyond her literary success, Rowling has been involved in
                                various philanthropic efforts, notably founding the Volant
                                Charitable Trust and Lumos, organizations that work to
                                alleviate social deprivation and support disadvantaged
                                children. Despite facing controversy and criticism for her
                                views on social issues, her impact on literature and popular
                                culture remains significant.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="author-book-main-page-base">
                <div className="container author-container">
                    <div className="py-3">
                    <h3>
                        <span id="books-by">books by</span>
                        <span id="author"> author</span>
                    </h3>
                    </div>
                    <div className="author-book-main-page-section d-flex">
                    {
                            book.map(book => {
                                return (
                                    <Link to={`/books/${book._id}`}><BookCard key={book._id} book={book} /></Link>
                                )
                            }
                              )
                        }
                    
                    </div>
                </div>
                </div>
            </div>
        </main>
    );
}

export default Author;