import React from 'react';
import ReduxTest from './ReduxTest';

const Greet = () => {
  return (
    <div className="container marginTop">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>This is a starter pack that runs React.js with Redux on top of an Node.js
              + Express.js server. ES6 can be run on the client and server because it
              ships with Babel.
          </h3>
          <br/>
          <h3>Click a language below to test the redux store. It's rumored that if a
              language disappears upon clicking, you will instantly absorb all knowledge
              of that language. Key word "rumored".
          </h3>
          <br />
          <br />
          <ReduxTest />
        </div>
      </div>
    </div>
  );
};

export default Greet;
