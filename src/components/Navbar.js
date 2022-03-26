import React from 'react'
import navImg from '../images/logo-new.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  navhead">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 px-5" to="/"><img src={navImg} alt="" width="80" /></Link>

                    <form className="d-flex wid">
                        <input className="form-control mx-5" type="search" placeholder="Search" aria-label="Search" />
                    </form>

                    <div className="mx-5">
                        <div className="btn-group mx-2" role="group" aria-label="Basic example">
                            <Link to='/login' className="btn btn-light">Login</Link>
                            <Link to='/signup' className="btn btn-light">Signup</Link>
                            <button type="button" disabled className="btn btn-dark"><i className="bi bi-person"></i></button>
                        </div>

                        <div className="btn-group mx-2" role="group" aria-label="Basic example">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-light"><span className="badge rounded-pill bg-danger">0</span></button>
                            <button type="button" disabled data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark"><i className="bi bi-cart4"></i></button>
                        </div>
                    </div>

                </div>
            </nav>

            <div>
                <div className="collapse navbar-collapse navColor" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">New Arrivals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pre-order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Bestsellers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">TextBooks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Award Winners</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Featured Authors</Link>
                        </li>
                    </ul>
                </div>

                {/* For show on large display */}
                <div className="navHead">
                    <nav className="nav container ">
                        <Link className="nav-link linkColor active" aria-current="page" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                        </svg></Link>

                        <div className='hides'>
                            <Link className="nav-link linkColor" to="/" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExampl" aria-expanded="false" aria-controls="collapseWidthExample">Books</Link>
                            <div class="collaps" id="collapseWidthExample" style={{ width: "400px" }}>
                                <div class="card card-body bg-dark text-muted" >
                                    <div class="row">
                                        <div class="col">
                                            <h5>Company</h5>
                                            <ul class="nav flex-column">
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Home</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Features</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Pricing</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>FAQs</small></Link></li>
                                            </ul>
                                        </div>

                                        <div class="col">
                                            <h5>Section</h5>
                                            <ul class="nav flex-column">
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Home</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Features</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Pricing</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>FAQs</small></Link></li>
                                            </ul>
                                        </div>

                                        <div class="col">
                                            <h5>Section</h5>
                                            <ul class="nav flex-column">
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Home</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Features</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>Pricing</small></Link></li>
                                                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-muted"><small className='foottxt'>FAQs</small></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="nav-link linkColor" to="/">New Arrivals</Link>
                        <Link className="nav-link linkColor" to="/">Pre-order</Link>
                        <Link className="nav-link linkColor" to="/">Bestsellers</Link>
                        <Link className="nav-link linkColor" to="/">TextBooks</Link>
                        <Link className="nav-link linkColor" to="/">Award Winners</Link>
                        <Link className="nav-link linkColor" to="/">Featured Authors</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar