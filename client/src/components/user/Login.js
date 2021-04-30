import React from "react";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "../../shared/styles.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;

        this.props.login({username, password}, this.props.history);
        toast.success('Logged In', {autoClose:3000, style: ({fontSize: "15px" })})
    }

    render() {
        const {username, password} = this.state;

        return (
            <form className="Login" onSubmit={this.handleSubmit}>
                <h2 className="title">LOGIN</h2>
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
                    style={{width: "400px"}}
                />
                </div>
                <Button type="submit" variant="contained" color="primary" style={{margin: "20px"}}>LOGIN</Button>
            </form>
        )
    }
}
export default Login;