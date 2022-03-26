import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-dark text-muted mt-3">
                <div class="container">
                    <footer class="py-4">
                        <div class="row">
                            <div class="col-2">
                                <h5>Company</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Home</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Features</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Pricing</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>FAQs</small></Link></li>
                                </ul>
                            </div>

                            <div class="col-2">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Home</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Features</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Pricing</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>FAQs</small></Link></li>
                                </ul>
                            </div>

                            <div class="col-2">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Home</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Features</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Pricing</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>FAQs</small></Link></li>
                                </ul>
                            </div>

                            <div class="col-2">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Home</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Features</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Pricing</small></Link></li>
                                    <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>FAQs</small></Link></li>
                                </ul>
                            </div>

                            <div class="col-3">
                                <form>
                                    <h5><Link to="/" className='text-decoration-none mx-3'>Follow Us</Link></h5>
                                    <ul class="list-unstyled d-flex">
                                        <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-facebook"></i></Link></li>
                                        <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-twitter"></i></Link></li>
                                        <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-linkedin"></i></Link></li>
                                        <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-pinterest"></i></Link></li>
                                        <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-youtube"></i></Link></li>
                                        <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-instagram"></i></Link></li>
                                    </ul>
                                </form>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center py-1 my-2 border-top border-bottom">
                            <small><span className="fw-bold">Address:</span> SR Ecommerce Factory Pvt. Ltd., 2/14, ground floor , Ansari road , Daryaganj Delhi 110002 | <span className="fw-bold">Email:</span><Link to="/" className='text-decoration-none'> customerservice@bookswagon.com</Link> | <span className="fw-bold">Phone#:</span> 011-41521153</small>
                        </div>

                        <div class="d-flex justify-content-between py-1 my-2">
                            <div>
                                <ul class="list-unstyled d-flex">
                                    <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-facebook"></i></Link></li>
                                    <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-twitter"></i></Link></li>
                                    <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-linkedin"></i></Link></li>
                                    <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-pinterest"></i></Link></li>
                                    <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-youtube"></i></Link></li>
                                    <li class="ms-3"><Link class="link-secondary foottxt" to="/"><i class="bi bi-instagram"></i></Link></li>
                                </ul>
                                <h6>100% Secure Payment</h6>
                                <small>All major credit & debit cards accepted</small>
                            </div>

                            <div>
                                <div className="text-muted foottxt">Copyright 2017. Bookswagon.com. All Rights Reserved</div>
                                <Link to="/" class="text-decoration-none text-muted"><span className='foottxt'>Privacy Policy</span></Link> | <Link to="/" class="text-decoration-none text-muted"><span className='foottxt'>Terms & Condition</span></Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer