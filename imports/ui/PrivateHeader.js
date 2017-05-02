import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';


export const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header--content">

      <h2 className="header--title">{props.title}</h2>
      <button className="button button--link-text" onClick={() => props.handleLogout() }>Logout</button>
      {/* <button className="button button--link-text" onClick={() => Accounts.logout() }>Logout</button> */}
      </div>
    </div>
  );
};

// export default PrivateHeader;
export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout()
  };
}, PrivateHeader);
