import React from "react";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "../../shared/styles.css";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            rePassword: ''
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeFirstName(e) {
        this.setState({firstName: e.target.value});
    }

    onChangeLastName(e) {
        this.setState({lastName: e.target.value});
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    onChangeRePassword(e) {
        this.setState({rePassword: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {firstName, lastName, username, password, rePassword} = this.state;

        this.props.register({firstName, lastName, username, password}, this.props.history);
        toast.success('Registration Successful !!', {autoClose:3000, style: ({fontSize: "15px" })});
    }

    render() {
        const {firstName, lastName, username, password, rePassword} = this.state;

        return (
            <form className="Register" onSubmit={this.handleSubmit}>
                <p className="title">REGISTER</p>
                <div className="input">
                <TextField
                    label="FIrst Name"
                    id="outlined-size-normal"
                    variant="outlined"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.onChangeFirstName}
                    value={firstName}
                    required
                    style={{width: "400px", margin: "10px"}}
                />
                </div>
                <div className="input">
                <TextField
                    label="Last Name"
                    id="outlined-size-normal"
                    variant="outlined"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.onChangeLastName}
                    value={lastName}
                    required
                    style={{width: "400px"}}
                />
                </div>
                <div className="input">
                <TextField
                    label="Username"
                    id="outlined-size-normal"
                    name="username"
                    variant="outlined"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                    required
                    style={{width: "400px", margin: "10px"}}
                />
                </div>
                <div className="input">
                <TextField
                    label="Password"
                    id="outlined-size-normal"
                    variant="outlined"
                    value={username}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                    required
                    style={{width: "400px", margin: "10px"}}
                />
                </div>
                <div className="input">
                <TextField
                    label="Repeat Password"
                    id="outlined-size-normal"
                    variant="outlined"
                    type="password"
                    name="rePassword"
                    placeholder="Repeat Password"
                    onChange={this.onChangeRePassword}
                    value={rePassword}
                    required
                    style={{width: "400px", margin: "10px"}}
                />
                </div>
                <Button type="submit" variant="contained" color="primary" style={{margin: "20px"}}>REGISTER</Button>
            </form>
        )
    }
}

export default Register;