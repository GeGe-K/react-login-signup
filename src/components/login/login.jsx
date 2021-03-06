import React from 'react';
import loginImg from '../../assests/img/bgimage.jpeg';
import './login.styles.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
export class Login extends React.Component {

   constructor() {
       super()
       this.state = {
            email: '',
            password: '',
       }
   }

handleLogin = () => {
    const {email, password} = this.state
    axios.post('https://942c7188a551.ngrok.io/api/login', {email, password}).then((response) => {
        console.log(response.data)
        this.setState({
            email: '',
            password: '',
        })
    }).catch((error) => {
        console.log(error.message)
    })
}

   render() {
       return <div className="base-container">
           <div className="row">
               {/* <div className="col-lg-6 d-none d-md-block">
                    <div className = "image">
                        <img src={loginImg}  className="img-fluid" alt=""/>
                    </div>
               </div> */}
               <div className="col-lg-6 form">
                    <form action="" method="post">
                        <div className="header d-sm-table">
                            <Link to=""><i class="fas fa-long-arrow-alt-left text-left"></i></Link>
                            <h2 className="text-left">Login</h2>
                        </div>
                        <p className="text-center">With</p>
                        <div className="login-icon">
                                <span className="fa-stack fa-2x"><i className="fab fa-google fa-stack-1x fa-inverse" onClick={this.handleGoogle}></i></span>
                                <span class="fa-stack fa-2x"><i class="fab fa-facebook-f fa-stack-1x fa-inverse" onClick={this.handleFacebook}></i></span>
                        </div>
                        <p className="text-center">OR</p>
                        <p className = "text-left small"> Please enter username and password to login.</p>
                        <div className = "form-group">
                            <input className="form-control" 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={(e)=> {
                                this.setState({
                                    email: e.target.value
                                })
                            }}
                            required/>
                        </div>
                        <div className = "form-group">
                                <input className="form-control" 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={(e) => {
                                    this.setState({
                                        password: e.target.value
                                    })
                                }}
                                required/>
                        </div>
                        <div className="form-group">
                            <div class="form-check">
                                <Link to="">Forgot Password?</Link> <i className = "fas fa-lock"></i>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn text-white" onClick={this.handleLogin}>Login</button>
                        </div>
                        <div className="footer">
                            <div className="already">
                                <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 d-none d-md-block">
                    <div className = "image">
                        <img src={loginImg}  className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
   }

}

