import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';


const Discover = () => {
  const snoowrap = require('snoowrap');
  function getLink() {
    const r = new snoowrap({
      userAgent: "whatever",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
  }

  return (
    <section className="row">
      
      <div className="col-xs-6 col-sm-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <div className="card-body">
            <div className="card-title">Card title</div>
            <p className="card-text">sss</p>
          </div>
        </div>
      </div>

      <div className="col-xs-6 col-sm-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <div className="card-body">
            <div className="card-title">Card title</div>
            <p className="card-text">sss</p>
          </div>
        </div>
      </div>

      <div className="col-xs-6 col-sm-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <div className="card-body">
            <div className="card-title">Card title</div>
            <p className="card-text">sss</p>
          </div>
        </div>
      </div>

    </section>

    
    
  );
};

export default Discover;
