import React from 'react';
import {Link} from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view--box">
          <h3> Page NotFound </h3>
          <p>Please make sure you have the correct URL.</p>
          <Link to="/" className="button button--link">Go to the Home Page</Link>
      </div>
  </div>

  );
};
