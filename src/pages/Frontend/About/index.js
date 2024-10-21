import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/aboutImg.png'

export default function About() {
    const stars = document.querySelectorAll('.star');
    const robotFace = document.getElementById('robot-face');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-rate');
            switch (rating) {
                case '5':
                    robotFace.textContent = '😁'; // Smiling face for 5 stars
                    break;
                case '4':
                    robotFace.textContent = '😊'; // Happy face for 4 stars
                    break;
                case '3':
                    robotFace.textContent = '😐'; // Neutral face for 3 stars
                    break;
                case '2':
                    robotFace.textContent = '😕'; // Unhappy face for 2 stars
                    break;
                case '1':
                    robotFace.textContent = '😢'; // Sad face for 1 star
                    break;
            }
        });
    });


    return (
        <>
            <div className="backImg">
                <div className="animation">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className='aboutImg' src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 p-3" style={{ marginTop: "30px" }}>
                        Awais Mart was founded in 2000 as an upscale and first integrated online supermarket in Dubai. We introduced the concept of online grocery shopping as an innovative & convenient alternative to traditional grocery shopping. We revolutionized the way people shop groceries.
                        We are so passionate to provide best services to our customers
                        In 2012, we were one of the leaders in providing the innovative payment method of "Credit/Debit Card on Delivery" in E-Commerce for our customers .
                        In 2013 - 2014, Awais Mart shortlisted as top 5 "Innovative Business" and "Online Business" of the Year by MEED Gulf Capital Awards.
                        In 2017, Awais Mart had completed a technology upgrade for (Website, Catalogue, E-commerce Backend)
                        In 2018, Awais Mart Launched its high standard mobile application on AppStore & Play Store with a review rate of 4.8 stars.
                        In 2020, Awais Mart awarded to be ranked as the top 15 eCommerce site for contributing to the region’s economy and knowledge development by Middle East Excellence Awards Institute.
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col d-flex justify-content-center">
                        <div className="rating">
                            <span className="star" data-rate={1}>
                                ★
                            </span>
                            <span className="star" data-rate={2}>
                                ★
                            </span>
                            <span className="star" data-rate={3}>
                                ★
                            </span>
                            <span className="star" data-rate={4}>
                                ★
                            </span>
                            <span className="star" data-rate={5}>
                                ★
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col d-flex justify-content-center">
                        <div id="robot-face" />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center p-2 my-5">
                <Link to="/aboutme"><button className='rounded-2' style={{ backgroundColor: "#588157", width: "80px", height: "37px" }}>About Me</button></Link>
            </div>
        </>
    )
}
