import React  from 'react';
import {Link} from 'react-router';
// import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';


// export default class Login extends React.Component {
export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    // Meteor.loginWithPassword({email}, password, (err) => {
    this.props.loginWithPassword({email}, password, (err) => {
      // console.log('login callBack', err);
      if(err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view--box">
        <h3>Login</h3>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view--form">
          <input ref="email" type="email" name="email" placeholder="Email Address" />
          <input ref="password" type="password" name="password" placeholder="Password" />
          <button className="button">login</button>
        </form>

        <Link to="/signup">Create an account.</Link>
      </div>
      </div>
    );
  }
}


export default createContainer(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login)
