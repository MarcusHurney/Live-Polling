import React from 'react';
import { Link } from 'react-router';

const Whoops = () => (
  <div>
    <h5>Whoops....</h5>
    <p>The page you requested cannot be found.
       Were you looking for one of these:
    </p>
    <ul>
      <li>
        <Link to="/">Join As Audience</Link>
      </li>
      <li>
        <Link to="/speaker">Start A Presentation</Link>
      </li>
      <li>
        <Link to="/board">View the Board</Link>
      </li>
    </ul>
  </div>
);

export default Whoops;
