import React from 'react';
import {Accounts} from 'meteor/accounts-base';


const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header--content">

      <h2 className="header--title">{props.title}</h2>
      <button className="button button--link-text" onClick={() => Accounts.logout() }>Logout</button>
      </div>
    </div>
  );
};

export default PrivateHeader;
