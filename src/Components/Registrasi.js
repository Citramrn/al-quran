import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import { message } from 'antd';
import { Helmet } from 'react-helmet';
import VisibilityOn from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { firebaseAuthentication } from '../config/firebase'

export default class Registrasi extends Component {
    state = {
        email: '',
        password: '',
        show: false,
        showPassword: false,
        confirmPassword: ''
    }
    handleChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = this.state;

        if (email && password && confirmPassword) {
            if (password === confirmPassword) {
                firebaseAuthentication.createUserWithEmailAndPassword(email, password)
                    .then(res => {
                        firebaseAuthentication.currentUser.sendEmailVerification()
                            .then(() => {
                                setTimeout(() => {
                                    message.warning('Please verify your email')
                                }, 1)
                                this.props.history.push('/login');
                            })
                            .catch((error) => {
                                setTimeout(() => {
                                    message.info(error.message)
                                }, 1000)
                            })
                    })
                    .catch(err => {
                        setTimeout(() => {
                            message.info(err.message)
                        }, 1000)
                    })
            } else {
                setTimeout(() => {
                    message.warning('Password Tidak Sama',)
                }, 1000)
            }
        } else {
            setTimeout(() => {
                message.warning('form Belum Diisi',)
            }, 1000)
        }
    }
    render() {
        const { email, password, confirmPassword } = this.state
        return (
            <div className="container container-block">
                <Helmet>
                    <title>Sign Up || My Al-Qur'an </title>
                    <meta name="description" content="registration page myal qur'an" />
                    <meta name="keywords" content="al quran read and voice" />
                </Helmet>

                <div className="card login-form bg-white shadow-sm p-3 mb-1  rounded border-0 ">
                    <div className="card-body">
                        <h2 className="card-title">Sign Up</h2>
                        <h6 className="card-subtitle  mb-5 fw-bold">Please sign up to use this site!</h6>
                        <form onSubmit={this.handleSubmit}>
                            <label for="exampleInputEmail1" className="form-label">Email*</label>
                            <div className="mb-3 input-group">
                                <input type='email' className="form-control" id="exampleInputEmail1" placeholder="Your Email" value={email} onChange={this.handleChangeField} name="email" />
                            </div>
                            <label for="exampleInputPassword1" className="form-label">Password*</label>
                            <div className="mb-3 input-group">
                                <input type={this.state.show ? 'text' : 'password'} className="form-control" id="exampleInputPassword1" placeholder="password" value={password} onChange={this.handleChangeField} name="password" />
                                <span className="input-group-text" id="basic-addon1" onClick={() => this.setState({ show: !this.state.show })}>{this.state.show ? <VisibilityOn /> : <VisibilityOff />}</span>
                            </div>
                            <label for="exampleInputPassword1" className="form-label">Confirm Password*</label>
                            <div className="mb-3 input-group">
                                <input type={this.state.showPassword ? 'text' : 'password'} className="form-control" id="exampleInputPassword1" placeholder="Confirm password" value={confirmPassword} onChange={this.handleChangeField} name="confirmPassword" />
                                <span className="input-group-text" id="basic-addon1" onClick={() => this.setState({ showPassword: !this.state.showPassword })}>{this.state.showPassword ? <VisibilityOn /> : <VisibilityOff />}</span>
                            </div>
                            <div className="d-grid mt-5">
                                <button type="submit" className="btn btn-success btn-login">Sign Up</button>
                            </div>
                            <div className="mt-3">
                                <label className='account'>Already have an account ? <Link to='/login' className="link">Sign In</Link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}