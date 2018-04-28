import React, { Component } from 'react';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Result from './components/Result/Result';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
// Assests
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      zipcode: '',
      results: '',
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { zipcode } = this.state;
    const api = `https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${zipcode}`;

    fetch(api)
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          this.setState({
            results: data,
            error: false
          });
        } else {
          this.setState({ 
            error: true,
            results: '' 
          });
        }
      })
      .catch(err => this.setState({ error: true }));
  }

  handleChange(e) {
    this.setState({ zipcode: e.target.value });
  }

  render() {
    const { zipcode, error, results } = this.state;

    return (
      <div className="App">
        <div className="deal">
          <p>Get $50 + $15 Credit*</p>
        </div>

        <Header />

        <Promo
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          value={zipcode}
          status={error}
        />

        {results && <Result result={results} />}

        <Articles />

        <Footer />
      </div>
    );
  }
}

export default App;
