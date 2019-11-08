import React, { Component } from 'react';
import { connect } from "react-redux";
import validator from 'validator';
import Swal from 'sweetalert2';

class Register extends Component {
    constructor () {
        super();
        
        this.state = {
            name: '',
            email: '',
            password: '',
            loading: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _jqueryScripts() {

        $('#name').focus();

    }

    _nameChange = (event) => {
        this.setState({name: event.target.value});
    }

    _emailChange = (event) => {
        this.setState({email: event.target.value});
    }

    _passwordChange = (event) => {
        this.setState({password: event.target.value});
    }
    
    async handleSubmit(event) {
        event.preventDefault();

        if ( this.state.name.length < 3 )
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Name min 3 words!'
            });

            return;
        }

        if ( this.state.email.length < 3 )
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'E-mail min 3 words!'
            });

            return;
        }
        else if ( !validator.isEmail(this.state.email) )
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter valid e-mail!'
            });

            return;
        }

        if ( this.state.name.length < 3 )
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password min 3 words!'
            });
            
            return;
        }

        this.setState({ loading: true });

        let response = await axios.post('/api/user/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        });

        console.log(response.data);

        if ( response.data.status === true ) {
            this.setState({ name: '', email: '', password: '', loading: false });

            Swal.fire(
                'Congrats!',
                'Register success!',
                'success'
            );
        } else {
            this.setState({ loading: false });
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    }

    _dataList = () => {
        if ( this.state.results != null && this.state.results.length > 0 )
        {
            const item = this.state.results.map((val) =>
                <li key={val.id}>{val.email}</li>
            );

            return <ol>{item}</ol>;
        }
    }

    componentDidMount() {

        this._jqueryScripts();
        
    }

    render() {
        return (
            <div className="container py-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" autoComplete="off" value={this.state.name} onChange={this._nameChange} />
                        <small id="nameHelp" className="form-text text-muted">Please type your name.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input type="text" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter e-mail" autoComplete="off" value={this.state.email} onChange={this._emailChange} />
                        <small id="emailHelp" className="form-text text-muted">Please type your valid e-mail.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter password" autoComplete="off" value={this.state.password} onChange={this._passwordChange} />
                        <small id="passwordHelp" className="form-text text-muted">Please type your secure password.</small>
                    </div>
                    
                    <button type="submit" id="submit" className="btn btn-primary" disabled={this.state.loading}>
                        { this.state.loading && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> }
                        Submit
                    </button>
                </form>
                
            </div>
        )
    }
}

const mapReduxStateToComponentProps = state => ({
    app: state.app
});

export default connect(
    mapReduxStateToComponentProps, 
    null
)(Register);