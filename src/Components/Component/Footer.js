import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">  <i className='bx bxs-book-reader'></i>
                        &copy; 2022 MyAl Qur'an, By Citra </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><Link className="text-muted" to="#"><i className='bx bxl-github'></i></Link></li>
                    <li className="ms-3"><Link className="text-muted" to="#"><i className='bx bx-envelope'></i></Link></li>
                    <li className="ms-3"><Link className="text-muted" to="#"><i className='bx bxl-instagram'></i></Link></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
