import React from 'react';
import loginImg from '../../assests/img/bgimage.jpeg';
import { Link } from 'react-router-dom'
import axios from 'axios'
// import 'bootstrap'

class Signup extends React.Component {

   constructor() {
       super()
       this.state = {
        name : '',
        email: '',
        password: '',
        password_confirmation: ''
       }
   } 

   handleRegister = () => {
       const {name, email, password, password_confirmation } =this.state
       axios.post('https://942c7188a551.ngrok.io/api/customers', {name, email, password, password_confirmation}).then((response) => {
        console.log(response.data)
        this.setState({
            name : '',
            email: '',
            password: '',
            password_confirmation: ''
        })
       }).catch((error) => {
           console.log(error.message)
       })
   }

   handleGoogle = () => {
       axios.get('https://942c7188a551.ngrok.io/api/oauth/google').then((response) => {
           console.log(response.data)
       }).catch((error) => {
        console.log(error.message)
    })
   }

   handleFacebook = () => {
    axios.get('https://942c7188a551.ngrok.io/api/oauth/facebook').then((response) => {
        console.log(response.data)
    }).catch((error) => {
     console.log(error.message)
 })
   }

   render() {
        return <div className="base-container">
        <div className="row">
            <div className="col-lg-6 d-none d-md-block">
                <div className = "image">
                    <img src={loginImg}  className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 form">
                <form action="" method="post">
                    <div className="header d-sm-table">
                        <Link to=""><i class="fas fa-long-arrow-alt-left text-left"></i></Link>
                        <h2 className="text-left">Sign Up</h2>
                    </div>
                    <p className="text-center">With</p>
                    <div className="login-icon">
                        <span className="fa-stack fa-2x"><i className="fab fa-google fa-stack-1x fa-inverse" onClick={this.handleGoogle}></i></span>
                        <span class="fa-stack fa-2x"><i class="fab fa-facebook-f fa-stack-1x fa-inverse" onClick={this.handleFacebook}></i></span>
                    </div>
                    <p className="text-center">OR</p>
                    <p class = "text-left small"> Please fill in the details to sign up for your account.</p>
                    <div className = "form-group">
                        <input className="form-control" 
                        type="text" 
                        name="name" 
                        placeholder="Full Name" 
                        onChange={(e) => {
                            this.setState({name: 
                                e.target.value})
                            }} 
                        required/>
                    </div>
                    <div className = "form-group">
                            <input className="form-control" 
                            type="email" name="email" 
                            placeholder="Email" 
                            onChange={(e) => {
                                this.setState({email:
                                    e.target.value})
                                }}
                            required/>
                    </div>
                    <div className = "form-group">
                        <input className="form-control"
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={(e) => {
                            this.setState({password:
                                e.target.value})
                            }} 
                        required/>
                    </div>
                    <div className = "form-group">
                        <input className="form-control"
                        type="password" 
                        name="password" 
                        placeholder="Confirm Password" 
                        onChange={(e) => {
                            this.setState({password_confirmation:
                                e.target.value})
                            }} 
                        required/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn text-white" onClick={this.handleRegister}>Sign Up</button>
                    </div>
                    <div className="footer">
                        <div className="already">
                            <p>You already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
   }
}

export default Signup
