import React, { useEffect, useState } from 'react'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
import b4 from '../images/b4.png'
import b5 from '../images/b5.png'
import b6 from '../images/b6.png'
import b7 from '../images/b7.png'
import b8 from '../images/b8.png'
import Modal from './Modal'
import axios from 'axios'

const Home = () => {
    const [book, setBook] = useState()

    const getBook = async () => {
        // await axios.get(``)
        const response = await axios.get('http://localhost:5000/api/getbooks', {
            headers: {
                'Accept': '*/*',
            }
        });
        const json = await response.data;
        return json;
    }
    useEffect(() => {
        getBook().then(data => { setBook(data); });
    }, [])


    return (
        <>
            <Modal />
            <div className="container mt-3">
                <div className="row g-5">
                    <div className="col-md-4 sideBrdr">
                        <h5 className='sideHead'>Browse by Category</h5>
                        <a className='sideLink' href="/">Architecture</a>
                        <a className='sideLink' href="/">Arts & Photography</a>
                        <a className='sideLink' href="/">Biographies & Memoirs</a>
                        <a className='sideLink' href="/">Body, Mind & Spirit</a>
                        <a className='sideLink' href="/">Business & Economics</a>
                        <a className='sideLink' href="/">Children & Teens</a>
                        <a className='sideLink' href="/">Computer & Internet</a>
                        <a className='sideLink' href="/">Cookery, Food & Wine</a>
                        <a className='sideLink' href="/">Dictionaries & Language</a>
                        <a className='sideLink' href="/">English Language Teaching</a>
                    </div>
                    <div className="col-md-8">
                        <div className="">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active rcircle" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='rcircle' aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className='rcircle' aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className='rcircle' aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className='rcircle' aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" className='rcircle' aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" className='rcircle' aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" className='rcircle' aria-label="Slide 8"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a href="/"><img src={b1} className="d-block w-100" alt="..." /></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="/"><img src={b2} className="d-block w-100" alt="..." /></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="/"><img src={b3} className="d-block w-100" alt="..." /></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="/"><img src={b4} className="d-block w-100" alt="..." /></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="/"><img src={b5} className="d-block w-100" alt="..." /></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="/"><img src={b6} className="d-block w-100" alt="..." /></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="/"><img src={b7} className="d-block w-100" alt="..." /></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href="/"><img src={b8} className="d-block w-100" alt="..." /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className="">
                                        <span data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="mx-2 crTxt" aria-current="true" aria-label="Slide 1">Best Sellers</span>
                                        <span data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" className="px-2 crTxt crbrdr" aria-label="Slide 2">New Arrivals</span>
                                        <span data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" className="mx-2 crTxt" aria-label="Slide 3">Pre Orders</span>
                                    </div>
                                </div>

                                <div>
                                    <a href="/">See All</a>
                                </div>
                            </div>
                            <div id="carouselExampleIndicators1" className="carousel slide border-bottom py-4 mb-5" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" >
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev crsbtn" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next crsbtn" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className="">
                                        <span data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="mx-2 crTxt" aria-current="true" aria-label="Slide 1">Newyork Times Bestsellers</span>
                                        <span data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" className="px-2 crTxt crbrdr" aria-label="Slide 2">Award Winner</span>
                                        <span data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" className="mx-2 crTxt" aria-label="Slide 3">Staf Picks</span>
                                    </div>
                                </div>

                                <div>
                                    <a href="/">See All</a>
                                </div>
                            </div>
                            <div id="carouselExampleIndicators2" className="carousel slide border-bottom py-4 mb-5" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev crsbtn" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next crsbtn" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className="">
                                        <span data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="mx-2 crTxt" aria-current="true" aria-label="Slide 1">Box Sets</span>
                                    </div>
                                </div>

                                <div>
                                    <a href="/">See All</a>
                                </div>
                            </div>
                            <div id="carouselExampleIndicators3" className="carousel slide border-bottom py-4 mb-5" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg" alt="..." />
                                                            <div className="card-body text-center">
                                                                <h6 className="card-title"><span className="text-decoration-line-through">₹1,986</span> <span className='redtxt'>{elem.price}</span></h6>
                                                                <small className="fw-bold crdtxt">{elem.name}</small>
                                                                <p><small>{elem.author}</small></p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev crsbtn" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next crsbtn" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                                    <span className="carousel-control-next-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className="">
                                        <span data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" className="mx-2 crTxt" aria-current="true" aria-label="Slide 1">Featured Authors</span>
                                    </div>
                                </div>

                                <div>
                                    <a href="/">See All</a>
                                </div>
                            </div>
                            <div id="carouselExampleIndicators4" className="carousel slide border-bottom py-4 mb-5" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg rounded-circle" alt="..." />
                                                            <div className="card-body text-center">
                                                                <small className="fw-bold crdtxt">{elem.author}</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg rounded-circle" alt="..." />
                                                            <div className="card-body text-center">
                                                                <small className="fw-bold crdtxt">{elem.author}</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-4 g-4">
                                            {book && book.map((elem, i) => (
                                                <div className="col" key={i}>
                                                    <div className="card">
                                                        <a className='crdlink' href="/">
                                                            <img src={require(`../images/${elem.image}.jpg`)} className="card-img-top mx-auto d-block crsimg rounded-circle" alt="..." />
                                                            <div className="card-body text-center">
                                                                <small className="fw-bold crdtxt">{elem.author}</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev crsbtn" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next crsbtn" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                                    <span className="carousel-control-next-icon crsarr" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home