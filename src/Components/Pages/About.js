import React from 'react';
import Helmet from 'react-helmet'
import Card from 'react-bootstrap/Card';
import Footer from '../Component/Footer';
import NavMenu from '../Component/NavMenu'

function About() {
    return (
        <section>
            <Helmet>
                <title>About || MyAl Qur'an</title>
                <meta name="description" content="about page myal qur'an" />
                <meta name="keywords" content="al quran read and voice" />
            </Helmet>
            <NavMenu />
            <div className="container mt-5">
                <Card body className='border-0 shadow-sm p-3 mb-5 rounded'><p><b>MyAl Qur'an</b> adalah web app kitab suci untuk umat Islam bertujuan membaca al qur'an dengan lebih ringkas di bawa ke mana saja melalui smartphone.</p>
                    <p>Fitur MyAl Qur'an <b>Version 1</b> terdapat : </p>
                    <ul>
                        <li>Sign Up </li>
                        <li>Sign In</li>
                        <li>Lupa Password</li>
                        <li>Log Out Akun</li>
                        <li>Audio (Press Release)</li>
                        <li>API = https://api.quran.gading.dev</li>
                        <li>Progresive Web App (Press Release)</li>
                    </ul>
                </Card>
            </div>
            <Footer />
        </section>
    );
}

export default About;
