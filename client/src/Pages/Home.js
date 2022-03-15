import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import 'font-awesome/css/font-awesome.min.css';


function Home() {
    return (
        <div>
            <div className='container-fluid d-flex justify-content-center align-items-center home-gradient'>
                <div className='row d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
                    <div className='col-lg-7 text-white font-weight-bold display-1 text-center'>
                        Welcome to Sign Kit!
                    </div>
                    <div className='col-lg-4 divider my-4' />
                    <div className='col-lg-7 container text-white-50 lead text-center' style={{fontSize:'5rem !important'}}>
                        The complete toolkit for Indian Sign Language. Explore our range of features which have been carefully designed keeping in mind the specific needs of people related to ISL.
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <a className='btn btn-info btn-lg px-3' href='#intro'>Get Started <i className="fa fa-angle-down"/></a>
                    </div>
                </div>
            </div>

            <section id='intro'>
                <div className='container'>
                    <div className='row my-5'>
                        <div className='col-md-12 d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
                            <div className='h2 section-heading'>We've what you need!</div>
                            <div className='col-lg-4 divider my-2' />
                            <div className='text-center normal-text'>
                                A comprehensive and aesthetic Indian Sign Language toolkit. A minimalist yet informative interface. Wide range of features containing different functionalities that are necessary to work with ISL. What else do you need anyway! We have everything wrapped up here! <br /> Dive into our diverse services and let us know about your experience!
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id='intro'>
                <div className='container'>
                    <div className='row my-5'>
                        <div className='col-md-12 d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
                            <div className='h2 section-heading'>We've what you need!</div>
                            <div className='col-lg-4 divider my-2' />
                            <div className='text-center normal-text'>
                                A comprehensive and aesthetic Indian Sign Language toolkit. A minimalist yet informative interface. Wide range of features containing different functionalities that are necessary to work with ISL. What else do you need anyway! We have everything wrapped up here! <br /> Dive into our diverse services and let us know about your experience!
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <footer className="page-footer font-small unique-color-dark">

            <div style={{backgroundColor:'#6351ce'}}>
                <div className="container">

                <div className="row py-4 d-flex align-items-center">

                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0">Get connected with us on social networks!</h6>
                    </div>

                    <div className="col-md-6 col-lg-7 text-center text-md-right">

                    <a className="fb-ic">
                        <i className="fab fa-facebook-f white-text mr-4"> </i>
                    </a>
                    <a className="tw-ic">
                        <i className="fab fa-twitter white-text mr-4"> </i>
                    </a>
                    <a className="gplus-ic">
                        <i className="fab fa-google-plus-g white-text mr-4"> </i>
                    </a>
                    <a className="li-ic">
                        <i className="fab fa-linkedin-in white-text mr-4"> </i>
                    </a>
                    <a className="ins-ic">
                        <i className="fab fa-instagram white-text"> </i>
                    </a>

                    </div>

                </div>

                </div>
            </div>

            <div className='container-fluid text-white pt-3' style={{backgroundColor:'rgba(33,37,41,1)'}}>
                <div className="container text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">SIGN KIT</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}}/>
                            <p className='footer-text'>A comprehensive toolkit containing various features related to Indian Sign Language.</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Services</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}} />
                            <p><a href="#!" className='footer-link'>Convert</a></p>
                            <p><a href="#!" className='footer-link'>Learn Sign</a></p>
                            <p><a href="#!" className='footer-link'>Videos</a></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}} />
                            <p><a href="#!" className='footer-link'>Home</a></p>
                            <p><a href="#!" className='footer-link'>About us</a></p>
                            <p><a href="#!" className='footer-link'>Github repo</a></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}}/>
                            <p><i className="fa fa-lg fa-home me-3 ms-0"></i><span className='footer-text'> NITK Surathkal, Mangalore</span></p>
                            <p><i className="fa fa-envelope me-3 ms-0"></i><span className='footer-text'> aprameyadash.191it209@nitk.edu.in </span> </p>
                            <p><i className="fa fa-envelope me-3 ms-0"></i><span className='footer-text'> pratham.191it241@nitk.edu.in </span> </p>
                            <p><i className="fa fa-phone me-3 ms-0"></i><span className='footer-text'> + 91 7735784564 </span> </p>
                            <p><i className="fa fa-phone me-3 ms-0"></i><span className='footer-text'> + 01 234 567 89 </span> </p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2022 Copyright</div>
            </div>
            </footer>
        </div>
    )
}

export default Home
