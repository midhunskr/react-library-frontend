import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({params}) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${params.bookId}`)

    const book = await response.json()
    return {book}
}

function Book () {
    const {book} = useLoaderData()
    return (
        <div>
            <main>
                <div className="wrapper">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="book-card position-relative d-flex align-items-center flex-column py-5">
                            <div className="book-card-base-1" />
                            {/* <div class="book-card-mask position-absolute">
                                                <h4>Harry Potter</h4>
                                            </div> */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="book-price-section">
                            <h3 className="pt-5">Harry Potter and the Philosopher's Stone</h3>
                            <div className="book-details">
                            <div className="rating d-flex align-items-center gap-3">
                                <div className="star">
                                <i
                                    className="fa-solid fa-star"
                                    style={{ color: "#FFD43B" }}
                                />
                                <i
                                    className="fa-solid fa-star"
                                    style={{ color: "#FFD43B" }}
                                />
                                <i
                                    className="fa-solid fa-star"
                                    style={{ color: "#FFD43B" }}
                                />
                                <i
                                    className="fa-solid fa-star"
                                    style={{ color: "#FFD43B" }}
                                />
                                <i
                                    className="fa-solid fa-star-half-stroke"
                                    style={{ color: "#FFD43B" }}
                                />
                                </div>
                                <div className="pt-3">
                                <p style={{ fontStyle: "italic" }}>(3247)</p>
                                </div>
                            </div>
                            <div className="book-properties d-flex justify-content-between pt-2">
                                <h6>Year:</h6>
                                <h6>Author:</h6>
                                <h6>Genre:</h6>
                            </div>
                            <div className="book-synopsis">
                                <h6>
                                "Harry Potter and the Philosopher's Stone" follows
                                eleven-year-old Harry Potter, who discovers he is a wizard and
                                attends Hogwarts School of Witchcraft and Wizardry. At
                                Hogwarts, he befriends Ron Weasley and Hermione Granger and
                                learns about his parents' mysterious deaths and his connection
                                to the dark wizard Voldemort. The trio uncovers the secret of
                                the Philosopher's Stone, a magical object granting
                                immortality, hidden within the school. In a climactic battle,
                                Harry thwarts Voldemort's attempt to steal the Stone,
                                preventing his return to power. The story concludes with Harry
                                returning to his aunt and uncle's home, eagerly awaiting his
                                next year at Hogwarts.
                                </h6>
                            </div>
                            <div className="buy-buttons d-flex gap-4 pt-4">
                                <button id="cart-button">Add to Cart</button>
                                <button id="buy-button">Buy Now</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Book;