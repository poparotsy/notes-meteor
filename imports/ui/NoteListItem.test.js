import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { notes } from '../fixtures/fixtures';
import {NoteListItem} from './NoteListItem';

if(Meteor.isClient) {

  describe('NoteListItem', function() {

    let Session;
    beforeEach(() =>{
      Session = {
        set: expect.createSpy()
      };
    });

    it('should render title and timeStamp', function() {
        const wrapper = mount(<NoteListItem note={notes[0]} Session={Session}/>);

        expect(wrapper.find('h5').text()).toBe(notes[0].title);
        expect(wrapper.find('p').text()).toBe('02/5/17');
      });

      it('should set default title if no title', function(){
        const wrapper = mount(<NoteListItem note={notes[1]} Session={Session}/>);

        expect(wrapper.find('h5').text()).toBe('untitled note');
      });


      it('should call set onClick', function(){
        const wrapper = mount(<NoteListItem note={notes[0]} Session={Session}/>);
        wrapper.find('div').simulate('click');
        expect(Session.set).toHaveBeenCalled();
        expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id);
      });

  });


}
