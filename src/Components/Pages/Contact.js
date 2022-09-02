import React from 'react';
import Helmet from 'react-helmet'
import NavMenu from '../Component/NavMenu'
import Footer from '../Component/Footer'

function Contact() {
    return (
        <section>
            <Helmet>
                <title>Contact || MyAl Qur'an</title>
                <meta name="description" content="contact page myal qur'an" />
                <meta name="keywords" content="al quran read and voice" />
            </Helmet>
            <NavMenu />
            <div className="container mt-4">
                <form action="">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <button type="button" className="btn btn-success">Comment</button>
            </div>

            <Footer />
        </section>
    );
}

export default Contact;
