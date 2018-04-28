import React, { Component } from 'react';
// Assets
import './Articles.css';
import Art1 from '../../images/article1.png';
import Art2 from '../../images/article2.png';
import Art3 from '../../images/article3.png';

class Articles extends Component {
  render() {
    return (
      <section className="wrapper articles">
        <h1>Everything you love about Target at your fingertips.</h1>

        <div className="articles-post">
          <article className="post">
            <img src={Art1} alt="Article 1" />
            <div className="post-content">
              <h3>Scroll through the aisles.</h3>
              <p>
                Create an order from your local store in our app or on our
                website.
              </p>
            </div>
          </article>
          <article className="post">
            <img src={Art2} alt="Article 2" />
            <div className="post-content">
              <h3>Our shoppers work their magic.</h3>
              <p>
                Connect with your shopper and get live updates from the aisles.
              </p>
            </div>
          </article>
          <article className="post">
            <img src={Art3} alt="Article 3" />
            <div className="post-content">
              <h3>We deliver your groceries</h3>
              <p>
                Schedule a delivery, and your order will arrive in as soon as 1
                hour.
              </p>
            </div>
          </article>
        </div>

        <div className="article-btn">
          <button className="btn">Get Started</button>
        </div>
      </section>
    );
  }
}

export default Articles;
