import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';


export const PrivateHeader = (props) => {

  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';

  return (
    <div className="header">
      <div className="header--content">
        <img className="header-nav-toggle" onClick={props.handleNavToggle} src={navImageSrc} />

      <h2 className="header--title">{props.title}</h2>
      <button className="button button--link-text" onClick={() => props.handleLogout() }>Logout</button>
      {/* <button className="button button--link-text" onClick={() => Accounts.logout() }>Logout</button> */}
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired,
  handleNavToggle: React.PropTypes.func.isRequired,
  isNavOpen: React.PropTypes.bool.isRequired
}


// export default PrivateHeader;
export default createContainer(() => {
  return {
    // handleNavBar: () => Session.set('isNavOpen', !!true),
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    handleLogout: () => Accounts.logout(),
    isNavOpen: Session.get('isNavOpen')
  };
}, PrivateHeader);
