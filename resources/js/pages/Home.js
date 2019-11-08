import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';

class Home extends Component {
    constructor () {
        super();
        
        this.state = {
            name: '',
            results: null,
            loading: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _jqueryScripts() {

        $('#name').focus();

    }

    _handleChange = (event) => {
        this.setState({name: event.target.value});

        if ( event.target.value == '' )
            this.setState({ results: null });
    }
    
    async handleSubmit(event) {
        event.preventDefault();

        if ( this.state.name.length < 3 )
        {
            alert('Enter min 3 words!');
            return;
        }

        this.setState({ loading: true });

        let response = await axios.get('/api/user', {
            params: {
              name: this.state.name
            }
        });

        console.log(response.data);

        this.setState({ results: response.data.data, loading: false });
    }

    _dataList = () => {
        if ( this.state.results != null && this.state.results.length > 0 )
        {
            const item = this.state.results.map((val) =>
                <li key={val.id}>{val.name} - {val.email}</li>
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
                        <label htmlFor="name">E-mail</label>
                        <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" autoComplete="off" value={this.state.name} onChange={this._handleChange} />
                        <small id="nameHelp" className="form-text text-muted">Please type your e-mail.</small>
                    </div>

                    <Button variant="primary" type="submit" disabled={this.state.loading || this.state.name.length < 1}>
                        { this.state.loading && <Spinner className="mr-2" animation="border" size="sm" role="status" aria-hidden="true" /> }

                        <span>Submit</span>
                    </Button>
                </form>

                { this.state.name.length > 0 ? <div className="alert alert-info mt-3">You typing: {this.state.name}</div> : null }

                { (this.state.results != null && this.state.results.length == 0) && <div className="alert alert-danger mt-3">Data not found</div> }

                { (this.state.results != null && this.state.results.length > 0) && <div className="alert alert-success mt-3">Found {this.state.results.length} data</div> }

                { this._dataList() }
                
            </div>
        )
    }
}

export default Home;