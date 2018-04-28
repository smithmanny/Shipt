import React from 'react';
// Assets
import './Promo.css';

const Promo = props => (
  <section className="wrapper promo">
    <div className="promo-content">
      <div className="promo-title">
        <h2>Target exclusive offer</h2>
        <p>$49 membership (reg. $99) + $15 credit with qualifying purchase.*</p>
      </div>

      <div className="promo-action__container">
        <div className="input-zipcode">
          <input 
            className={props.status ? 'error' : ''}
            type="number" 
            name="zipcode" 
            placeholder="Enter ZIP code" 
            value={props.value}
            onChange={props.onChange}
            />
        </div>
        <button className="btn promo-btn" onClick={props.onClick}>Get Started</button>

      </div>
      {props.status && <p className='error'>This zipcode is invalid! Please try again.</p> }
      
      <small className="legal">
        *Membership offer valid for new members only. Target order of $100 or
        more must be placed to quality for $15 credit, which expires 30 days
        after qualifyingorder is placed and can be applied to any order from
        Shipt.
      </small>
    </div>
  </section>
);

export default Promo;
