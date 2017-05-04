import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import {Editor} from './Editor';
import {notes} from './../fixtures/fixtures';


if(Meteor.isClient) {
  describe('Editor', function(){
    let browserHistory;
    let call;

    beforeEach(function() {
        call = expect.createSpy();
        browserHistory = {
          push: expect.createSpy()
        }
    });
    // Test render cases
    it('should render pick a note message', function() {
      const wrapper = mount(<Editor browserHistory={browserHistory} call={call}/>);
      expect(wrapper.find('p').text()).toBe('pick/create a note go get started.');
    });

    it('should reneder not found', function(){
      const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={'fakeNoteId'}/>);
      expect(wrapper.find('p').text()).toBe('Note not found');
    });

    it('should remove note', function() {
      const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={notes[0]._id} note={notes[0]}/>);
      wrapper.find('button').simulate('click');
      expect(call).toHaveBeenCalledWith('notes.remove', notes[0]._id);
      expect(browserHistory.push).toHaveBeenCalledWith('/dashboard');
    });


    it('should update note body on textarea change', function(){
      const newBody = 'textarea body test'
      const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={notes[0]._id} note={notes[0]}/>);
      wrapper.find('textarea').simulate('change', {
        target: {
          value: newBody
        }
      });
        expect(wrapper.state('body')).toBe(newBody);
        expect(call).toHaveBeenCalledWith('notes.update', notes[0]._id, {body: newBody});
    });

    it('should update note title on change', function(){
      const newTitle = 'input title test'
      const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={notes[0]._id} note={notes[0]}/>);
      wrapper.find('input').simulate('change', {
        target: {
          value: newTitle
        }
      });
        expect(wrapper.state('title')).toBe(newTitle);
        expect(call).toHaveBeenCalledWith('notes.update', notes[0]._id, {title: newTitle});
    });

    it('should update state on componentDidUpdate', function(){
      const wrapper = mount(<Editor browserHistory={browserHistory} call={call}/>);
      wrapper.setProps({
        selectedNoteId: notes[1]._id,
        note: notes[1]
      });

      expect(wrapper.state('title')).toBe(notes[1].title);
      expect(wrapper.state('body')).toBe(notes[1].body);

    });

    it('should not set state if no prop provided componentDidUpdate', function(){
      const wrapper = mount(<Editor browserHistory={browserHistory} call={call}/>);
      wrapper.setProps({
        selectedNoteId: notes[1]._id
      });

      expect(wrapper.state('title')).toBe('');
      expect(wrapper.state('body')).toBe('');

    });


  });


}
