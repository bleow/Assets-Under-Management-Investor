/* eslint-disable react/jsx-no-undef */
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const Discover = () => {
  var data = [];
  var Title1='';
  var Text1='';
  var Url1='';
  var Title2='';
  var Text2='';
  var Url2='';
  var Title3='';
  var Text3='';
  var Url3='';
  var results=[]
  const SetofPosts = new Set();
  const snoowrap = require('snoowrap');
  const r = new snoowrap({
    userAgent: "HCBC",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  });

  const [isLoading, setLoading] = useState(true);
  r.getSubreddit('stocks').getHot().then(function(result) {
    results = result;
    console.log(results);
    loadContent();
    render();
    setLoading(false);
  })
  
  function loadContent() {
    let choice = getRandomInt(results.length-2);
    Title1 = results[choice].title;
    Text1 = results[choice].selftext;
    Url1 = results[choice].url;
    Title2 = results[choice+1].title;
    Text2 = results[choice+1].selftext;
    Url2 = results[choice+1].url;
    Title3 = results[choice+2].title;
    Text3 = results[choice+2].selftext;
    Url3 = results[choice+2].url;
  }

  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from:   { x: 0, y: 100, opacity: 0},
    enter:  { x: 0, y: 0,    opacity: 1 },
    leave:  { x: 0, y: -100,  opacity: 0},
  });
  function onRefresh() {
    setIsVisible(v => !v);
    setTimeout(() => {
      setIsVisible(v => !v);
    }, 1000);
    loadContent();
  }

  function render() {
    return (
      <section>
        <div className="row">
          <div className="col text-center mb-4">
            <Button variant="contained" onClick={onRefresh}>Refresh Posts</Button>
          </div>
        </div>
  
        {transition((style, item) => item ?
        <animated.div style={style} className="row">
  
          <div className="col-xs-6 col-sm-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
              <div className="card-body">
                <div className="card-title">{Title1}</div>
                <p className="card-text">{Text1}</p>
              </div>
            </div>
          </div>
  
          <div className="col-xs-6 col-sm-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
              <div className="card-body">
                <div className="card-title">{Title2}</div>
                <p className="card-text">{Text2}</p>
              </div>
            </div>
          </div>
  
          <div className="col-xs-6 col-sm-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
              <div className="card-body">
                <div className="card-title">{Title3}</div>
                <p className="card-text">{Text3}</p>
              </div>
            </div>
          </div>
  
        </animated.div>
        : '' )}
  
      </section>
    );  
  }

  while (isLoading) {
    return <div className="Discover">Loading...</div>;
  }
  
};

export default Discover;
