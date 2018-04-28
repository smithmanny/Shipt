import React from 'react';
// Assets
import './Result.css';

const Result = ({ result }) => (
  <section className="result-wrapper">
    <h5>Delivering From:</h5>

    <div className="results">
      {result.stores
        .sort((prev, next) => (prev.name < next.name ? -1 : 1))
        .map((store, index) => (
          <div className="result" key={index}>
            <h2>{store.name}</h2>
            <p>
              {Date.parse(store.launch_date) < Date.now()
                ? `Coming ${new Date(store.launch_date).getMonth()}/${new Date(
                    store.launch_date
                  ).getDate()}`
                : 'Available Now'}
            </p>
          </div>
        ))}
    </div>

    <div className="result-btn">
      <button className="btn">Get Started</button>
    </div>
  </section>
);

export default Result;
