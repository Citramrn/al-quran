import React, { Component } from 'react'
import 'antd/dist/antd.css'
import VisibilityOn from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { message } from 'antd'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import { firebaseAuthentication } from '../config/firebase'

export default class Registrasi extends Component {
    state = {
        email: '',
        password: '',
        show: false,
        remember: ''
    }
    handleChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state

        if (email && password) {
            firebaseAuthentication.signInWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res)
                    if (res.user.emailVerified) {
                        this.props.history.push('/home')
                    } else {
                        setTimeout(() => {
                            message.info('Verify your email!')
                        }, 1000)
                        firebaseAuthentication.signOut()
                    }
                })
                .catch(error => {
                    setTimeout(() => {
                        message.error(error.message)
                    }, 1000)
                })
        } else {
            setTimeout(() => {
                message.warning('Form Belum Diisi')
            }, 1000)
        }
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="container container-block">
                <Helmet>
                    <title>Sign In || My Al-Qur'an </title>
                    <meta name="description" content="login page myal qur'an" />
                    <meta name="keywords" content="al quran read and voice" />
                </Helmet>
                <div className="card login-form bg-white shadow-sm p-3 mb-1  rounded border-0">
                    <div className="card-body">
                        <h2 className="card-title">Sign In</h2>
                        <h6 className="card-subtitle mb-5 fw-bold">Please sign in to use this site!</h6>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-4">
                                <label for="exampleInputEmail1" className="form-label">Email*</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" value={email} onChange={this.handleChangeField} name="email" />
                            </div>
                            <label for="exampleInputPassword1" className="form-label">Password*</label>
                            <div className="mb-3 input-group">
                                <input type={this.state.show ? 'text' : 'password'} className="form-control" id="exampleInputPassword1" placeholder="password" value={password} onChange={this.handleChangeField} name="password" />
                                <span className="input-group-text" id="basic-addon1" onClick={() => this.setState({ show: !this.state.show })}>{this.state.show ? <VisibilityOn /> : <VisibilityOff />}</span>
                            </div>
                            <div className="justify-content-between forget">
                                <div>
                                    <Link to="/forgot-password" className="links">Forgot Password ?</Link>
                                </div>
                            </div>
                            <div className="d-grid mt-5">
                                <button type="submit" className="btn  btn-login">Sign In</button>
                            </div>
                            <div className="mt-3">
                                <label className='account'>Not registered yet ? <Link to='/registrasi' className="link">Create an account</Link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}