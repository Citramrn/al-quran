import React, { Component } from 'react'
import { firebaseAuthentication } from '../config/firebase'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        email: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state

        firebaseAuthentication.sendPasswordResetEmail(email)
            .then(function () {
                alert('Please check your email...')
            }).catch(function (e) {
                console.log(e)
            })


    }

    handleChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { email } = this.state

        return (
            <div className="container container-block">
                <Helmet>
                    <title>Forgot Password || My Al-Qur'an </title>
                    <meta name="description" content="forgot password page myal qur'an" />
                    <meta name="keywords" content="al quran read and voice" />
                </Helmet>
                <div className="card login-form bg-white shadow-sm p-3 mb-1  rounded border-0">
                    <div className="card-body">
                        <h2 className="card-title">Forgotten Password</h2>
                        <h6 clasName="card-subtitle text-muted mb-5 fw-bold">Did you forget the password ?</h6>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-4">
                                <label for="exampleInputEmail1" className="form-label">Email*</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" value={email} onChange={this.handleChangeField} name="email" />
                            </div>
                            <div className="d-grid mt-3">
                                <button type="submit" className="btn btn-success btn-login rounded-pill">Forgot Password</button>
                            </div>
                            <div className="mt-3">
                                <label>Already have an account ? <Link to='/login' className="link">Sign In</Link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}