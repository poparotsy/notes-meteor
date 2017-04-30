import React from 'react';
import PrivateHeader from '../ui/PrivateHeader';


// Stateless functional components example

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          Dashboard page-content.
        </div>
    </div>
  );
}
