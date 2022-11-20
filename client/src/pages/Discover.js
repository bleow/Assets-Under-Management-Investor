/* eslint-disable react/jsx-no-undef */
import React, {useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import './Discover.css';

function Discover() {
  const snoowrap = require('snoowrap');
  const r = new snoowrap({
    userAgent: "HCBC",
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    username: process.env.REACT_APP_CLIENT_NAME,
    password: process.env.REACT_APP_CLIENT_PASSWORD
  });

  var posts = [];
  const [chosen, setChosen] = useState([])
  var visited = new Set();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    posts = await r.getSubreddit('stocks').getHot();
    console.log("posts", posts);
    let buffer = [];
    buffer.length = 0;
    while (buffer.length < 3) {
      let choice = Math.floor(Math.random() * (posts.length - 1 + 1));
      console.log(choice);
      if (!visited.has(choice) && posts[choice]!==undefined) {
        buffer.push(posts[choice])
      }
    }
    console.log("buffer", buffer);
    setChosen(buffer);
  }

  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from:   { x: 0, y: 100, opacity: 0},
    enter:  { x: 0, y: 0,    opacity: 1 },
    leave:  { x: 0, y: -100,  opacity: 0},
  });

  function onRefresh() {
    setIsVisible(v => !v);
    fetchData().then(r => setIsVisible(v => !v));
  }

  return (
    <div className="col">
      <div className="row">
        <div className="col text-center mb-4">
          <Button variant="contained" onClick={onRefresh}>Refresh Posts</Button>
        </div>
      </div>

      {transition((style, item) => item ?
      <animated.div style={style} className="row">

        <div className="row">
          {chosen.map(chose => (
              <div key = {chose.title} className="col-xs-6 col-sm-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <div className="card-body">
                    <div className="card-title"><b>{chose.title}</b></div>
                    <p className="card-text overflow">{chose.selftext}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
     </animated.div>
     : '' )}
    </div>
  );

  //
  // function render() {
  //   console.log("render");
  //   return (
  //     <section>
  //       <div className="row">
  //         <div className="col text-center mb-4">
  //           <Button variant="contained" onClick={onRefresh}>Refresh Posts</Button>
  //         </div>
  //       </div>
  //
  //       {transition((style, item) => item ?
  //       <animated.div style={style} className="row">
  //
  //         <div className="col-xs-6 col-sm-4">
  //           <div className="card p-0 overflow-hidden h-100 shadow">
  //             <div className="card-body">
  //               <div className="card-title">{Title1}</div>
  //               <p className="card-text">{Text1}</p>
  //             </div>
  //           </div>
  //         </div>
  //
  //         <div className="col-xs-6 col-sm-4">
  //           <div className="card p-0 overflow-hidden h-100 shadow">
  //             <div className="card-body">
  //               <div className="card-title">{Title2}</div>
  //               <p className="card-text">{Text2}</p>
  //             </div>
  //           </div>
  //         </div>
  //
  //         <div className="col-xs-6 col-sm-4">
  //           <div className="card p-0 overflow-hidden h-100 shadow">
  //             <div className="card-body">
  //               <div className="card-title">{Title3}</div>
  //               <p className="card-text">{Text3}</p>
  //             </div>
  //           </div>
  //         </div>
  //
  //       </animated.div>
  //       : '' )}
  //
  //     </section>
  //   );
  // }
  //
  // while (isLoading) {
  //   return <div className="Discover">Loading...</div>;
  // }
  
}

export default Discover;
