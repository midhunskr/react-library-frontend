import React from "react"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

export async function loader() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authors`)
    const authors = await response.json()
    return {authors}
}

function Home() {

    const {authors} = useLoaderData()
    console.log(authors)
    return (
        <main>
        {/*---------------------------------------------Landing Section------------------------------------------------*/}
        <section className="landing-section d-flex justify-content-between align-items-center">
            <img id="illustration1" src="./images/illustration2.svg" alt="" />
            <div className="carousel slide container d-flex justify-content-between align-items-center text-center" id="carouselDemo" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"><img className="img-fluid d-block" src="./images/img1.png" /></button>
                <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to={1} aria-label="Slide 2"><img className="img-fluid d-block" src="./images/img2.png" /></button>
                <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to={2} aria-label="Slide 3"><img className="img-fluid d-block" src="./images/img3.png" /></button>
                <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to={3} aria-label="Slide 4"><img className="img-fluid d-block" src="./images/img4.png" /></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={3000}>
                <div className="carousel-img-section">
                    <img id="carousel-img" className="img-fluid py-5" src="./images/img1.png" />
                </div>
                <div className="carousel-caption mb-4">
                    <h5>Title Slide 0</h5>
                    <p>This is a title description for Slide 0</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                <div className="carousel-img-section">
                    <img id="carousel-img" className="img-fluid py-5" src="./images/img2.png" />
                </div>
                <div className="carousel-caption mb-4">
                    <h5>Title Slide 1</h5>
                    <p>This is a title description for Slide 1</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                <div className="carousel-img-section">
                    <img id="carousel-img" className="img-fluid py-5" src="./images/img3.png" />
                </div>
                <div className="carousel-caption mb-4">
                    <h5>Title Slide 2</h5>
                    <p>This is a title description for Slide 2</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                <div className="carousel-img-section">
                    <img id="carousel-img" className="img-fluid py-5" src="./images/img4.png" />
                </div>
                <div className="carousel-caption mb-4">
                    <h5>Title Slide 3</h5>
                    <p>This is a title description for Slide 3</p>
                </div>
                </div>                                       
            </div>
            <button className="button carousel-control-prev" type="button" data-bs-target="#carouselDemo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" />
            </button>
            <button className="button carousel-control-next" type="button" data-bs-target="#carouselDemo" data-bs-slide="next">
                <span className="carousel-control-next-icon" />
            </button>
            </div>
            <img id="illustration2" src="./images/illustration1.svg" alt="" />
        </section>
        {/*---------------------------------------------Author Section------------------------------------------------*/}
        <div className="author-section">
            <div className="author-mask" />
            <div className="container position-relative">
            <div className="author-mask-outer position-absolute d-flex justify-content-evenly px-2 align-items-center">
                <i className="fa-solid fa-circle" style={{color: '#313a39'}} />
                <Link to={'/authors'}><h2><span id="top">top</span><span id="authors"> authors</span></h2></Link>
                <i className="fa-solid fa-circle" style={{color: '#313a39'}} />
            </div>
            <div className="author-mask-outer2 position-absolute d-flex justify-content-center align-items-center">
            </div>
            {/*---------------------------------------------Author Section / Scrolling Section----------------------------------------*/}
            <div className="author-scroller">
                <div className="author-cards-section author-scroller-inner">
                {/*-------------Set 1-------------*/}
                <Link to={'/authors'}>
                    <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                    <div className="author-card-base-1" />
                    <div className="author-card-mask position-absolute">
                    {
                        authors.map(author=>{
                            return (
                                <h4 key={author._id}>{authors[0].authorName}</h4>
                            )
                        })
                    }
                    </div>
                    </div>
                </Link>
                <a href>
                    <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                    <div className="author-card-base-2" />
                    <div className="author-card-mask position-absolute">
                    {
                        authors.map(author=>{
                            return (
                                <h4 key={author._id}>{authors[1].authorName}</h4>
                            )
                        })
                    }
                    </div>
                    </div>
                </a>
                <a href>
                    <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                    <div className="author-card-base-3" />
                    <div className="author-card-mask position-absolute">
                    {
                        authors.map(author=>{
                            return (
                                <h4 key={author._id}>{authors[2].authorName}</h4>
                            )
                        })
                    }
                    </div>
                    </div>
                </a>
                <a href>
                    <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                    <div className="author-card-base-4" />
                    <div className="author-card-mask position-absolute">
                    {
                        authors.map(author=>{
                            return (
                                <h4 key={author._id}>{authors[3].authorName}</h4>
                            )
                        })
                    }
                    </div>
                    </div>
                </a>
                <a href>
                    <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                    <div className="author-card-base-5" />
                    <div className="author-card-mask position-absolute">
                    {
                        authors.map(author=>{
                            return (
                                <h4 key={author._id}>{authors[4].authorName}</h4>
                            )
                        })
                    }
                    </div>
                    </div>
                </a>
                <a href>
                    <div className="author-card position-relative d-flex flex-column align-items-center py-5">
                    <div className="author-card-base-6" />
                    <div className="author-card-mask position-absolute">
                    {
                        authors.map(author=>{
                            return (
                                <h4 key={author._id}>{authors[5].authorName}</h4>
                            )
                        })
                    }
                    </div>
                    </div>
                </a>

                
                
                </div>  
            </div>               
            </div>              
        </div>

                  
        
        {/*---------------------------------------------CTA Section------------------------------------------------*/}
        <div className="author-section">
            <div className="author-mask" />
            <div className="container position-relative cta">
            <div className="author-mask-outer position-absolute d-flex justify-content-evenly px-2 align-items-center">
                <i className="fa-solid fa-circle" style={{color: '#313a39'}} />
                <h2><span id="top">mobile</span><span id="authors"> app</span></h2>
                <i className="fa-solid fa-circle" style={{color: '#313a39'}} />
            </div>
            <div className="author-mask-outer2 position-absolute d-flex justify-content-center align-items-center">                      
            </div>
            <div className="row leftSection d-flex align-items-center">
                <div className="col-lg-6">
                <div className="app-download">
                    <h3 className="pb-5">read <span id="better">better</span> with <br />better <span id="app">app</span></h3>
                    <div className="email-input">
                    <input className="border-0" id="email-box" type="text" placeholder="enter your email" />
                    </div>
                    <div className="download-buttons pt-4 d-flex gap-2">
                    <button className="d-flex align-items-center justify-content-evenly android" id="android">
                        <i className="fa-brands fa-android" style={{color: '#717A79'}} />
                        <h5 className="my-1">DOWNLOAD</h5>
                    </button>
                    <button className="d-flex align-items-center justify-content-evenly" id="apple">
                        <i className="fa-brands fa-apple mb-1" style={{color: '#98E2C8'}} />
                        <h5 className="my-1">DOWNLOAD</h5>
                    </button>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="mockup-section">
                    <img className="img-fluid" id="mockup" src="./images/Group 53.png" alt="" />
                </div>
                </div>
            </div>               
            </div>              
        </div>
    </main>
    )

}

export default Home