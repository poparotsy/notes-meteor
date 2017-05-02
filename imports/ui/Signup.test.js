import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import {Signup} from './Signup';

if(Meteor.isClient) {

  describe('Signup', function() {
    it('should show error message', function() {
        const error = 'this is not working';
        const wrapper = mount (<Signup createUser={() => {}}/>);

        wrapper.setState({error});
        const errorText = wrapper.find('.errorMessage').text();
        expect(errorText).toBe(error);

        wrapper.setState({error: ''});
        expect(wrapper.find('.errorMessage').length).toBe(0);
    });



    it('should call createUser with the form data', function() {
      const email = 'qauser@example.net';
      const password = 'password123';
      const spy = expect.createSpy();
      const wrapper = mount(<Signup createUser={spy}/>);
      // ref below is to target the component ref.
      // node to get the HTML element
      wrapper.ref('email').node.value = email;
      wrapper.ref('password').node.value = password;

      wrapper.find('form').simulate('submit');
      expect(spy.calls[0].arguments[0]).toEqual({email, password});

    });

    it('should call createUser with wrong password length', function() {
      const email = 'qauser@example.net';
      const password = '123       ';
      const spy = expect.createSpy();
      const wrapper = mount(<Signup createUser={spy}/>);
      // ref below is to target the component ref.
      // node to get the HTML element
      wrapper.ref('email').node.value = email;
      wrapper.ref('password').node.value = password;

      wrapper.find('form').simulate('submit');

      // console.log(wrapper.state());
      expect(wrapper.state('error').length).toNotBe(0);
      expect(wrapper.state('error')).toMatch(/Password must be at least 8 characters./);

    });

    it('should set createUser callBack errors', function() {
      const password = 'password123!';
      const reason = 'This is why it failed';
      const spy = expect.createSpy();
      const wrapper = mount(<Signup createUser={spy}/>);
      wrapper.ref('password').node.value = password;

      wrapper.find('form').simulate('submit');

      spy.calls[0].arguments[1]({ reason });
      expect(wrapper.state('error')).toBe(reason);

      spy.calls[0].arguments[1]();
      expect(wrapper.state('error')).toBe('');
    
    });

    it('should show as pending test');

  });
}
