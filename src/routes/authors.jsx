import React from "react";
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";


export async function loader() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authors`)
    const authors = await response.json()
    return {authors}
}

export default function Authors() {

    const {authors} = useLoaderData()

    return (
        <div>
            
            <div className="author-scroller">
                    <div className="author-cards-section author-scroller-inner ">
                    <div className="container">
                        <h3>Authors</h3>
                    </div>
                    {/*-------------Set 1-------------*/}
                        <div className="container d-flex align-items-center justify-content-between">                  
                            <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                                <div className="author-card-base-1" />
                                    <div className="author-card-mask position-absolute">
                                        {
                                            authors.map(author=>{
                                                return (
                                                    <Link to={`/authors/${author._id}`}><h4 key={author._id}>{authors[0].authorName}</h4></Link>
                                                )
                                            })
                                        }
                                    </div>
                            </div>

                            <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                                <div className="author-card-base-2" />
                                    <div className="author-card-mask position-absolute">
                                        {
                                            authors.map(author=>{
                                                return (
                                                    <Link to={`/authors/${author._id}`}><h4 key={author._id}>{authors[1].authorName}</h4></Link>
                                                )
                                            })
                                        }
                                    </div>
                            </div>

                            <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                                <div className="author-card-base-3" />
                                    <div className="author-card-mask position-absolute">
                                        {
                                            authors.map(author=>{
                                                return (
                                                    <Link to={`/authors/${author._id}`}><h4 key={author._id}>{authors[2].authorName}</h4></Link>
                                                )
                                            })
                                        }
                                    </div>
                            </div>

                            <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                                <div className="author-card-base-4" />
                                    <div className="author-card-mask position-absolute">
                                        {
                                            authors.map(author=>{
                                                return (
                                                    <Link to={`/authors/${author._id}`}><h4 key={author._id}>{authors[3].authorName}</h4></Link>
                                                )
                                            })
                                        }
                                    </div>
                            </div>

                            <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                                <div className="author-card-base-5" />
                                    <div className="author-card-mask position-absolute">
                                        {
                                            authors.map(author=>{
                                                return (
                                                    <Link to={`/authors/${author._id}`}><h4 key={author._id}>{authors[4].authorName}</h4></Link>
                                                )
                                            })
                                        }
                                    </div>
                            </div>

                            <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                                <div className="author-card-base-6" />
                                    <div className="author-card-mask position-absolute">
                                        {
                                            authors.map(author=>{
                                                return (
                                                    <Link to={`/authors/${author._id}`}><h4 key={author._id}>{authors[5].authorName}</h4></Link>
                                                )
                                            })
                                        }
                                    </div>
                            </div>     
                        </div>                 
                    </div>  
            </div>
        </div> 
    )
}