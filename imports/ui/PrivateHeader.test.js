import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import {PrivateHeader} from './PrivateHeader';


if(Meteor.isClient) {
  describe('PrivateHeader', function() {
    it('should set button text to Logout', function(){
        const wrapper = mount( <PrivateHeader title="enzyme test case" handleLogout={()=>{}}/> );
        const buttonText = wrapper.find('button').text();

        expect(buttonText).toBe('Logout');
    });

    it('should use title prop as h2 title text', function(){
      const title = 'test title here';
      const wrapper = mount( <PrivateHeader title={title} handleLogout={()=>{}}/> );
      const actualTitle = wrapper.find('h2').text();

      expect(actualTitle).toBe(title);
    });

    // it('should call the function', function() {
    //   const spy = expect.createSpy();
    //   spy("abc");
    //
    //   // debugger; pause chrome developer tools
    //   // expect(spy).toHaveBeenCalled();
    //   // expect(spy).toNotHaveBeenCalled();
    //   // expect(spy).toHaveBeenCalledWith("abc");
    // });

    it('should call handleLogout on click', function(){
      const spy = expect.createSpy();
      const wrapper = mount( <PrivateHeader title="spy" handleLogout={spy} /> );
      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalled();
    });

  });
}
