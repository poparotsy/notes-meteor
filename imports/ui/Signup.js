import React    from 'react';
import {Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base'


export default class Signup extends React.Component {

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

      if (password.length < 9) {
        return this.setState({error: "Password must be at least 8 characters."})
      }

      Accounts.createUser({email, password}, (err) => {
        // console.log('callBack'. err);
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
        <p>Sing Up</p>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view--form">
          <input ref="email" type="email" name="email" placeholder="Email Address" />
          <input ref="password" type="password" name="password" placeholder="Password" />
          <button className="button">Create an Account</button>
        </form>

        <p>Already Member?</p>
        <Link to="/">login here</Link>
      </div>
      </div>
    );
  }
}
