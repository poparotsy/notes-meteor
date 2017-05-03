import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if(Meteor.isClient) {

  describe('NoteListItem', function() {
    it('should render title and timeStamp', function() {
      const title = 'QA title';
      const updatedAt = 1493781314630;
      const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('02/5/17');
      });

      it('should set default title if no title', function(){
        const title = '';
        const updatedAt = 1493781314630;
        const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);

        expect(wrapper.find('h5').text()).toBe('untitled note');
      });

  });


}
