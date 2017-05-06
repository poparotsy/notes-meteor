import React from 'react';
import {createContainer} from 'react-meteor-data';

export const NoteListHeader = (props) => {

  const addNote = (e) => {
    e.preventDefault();
    props.meteorCall('notes.insert', (err, res) => {
      if(res) {
        props.Session.set('selectedNoteId', res);
        }
    });
  };
  return (
    <div className="item-list--header">
      <button className="button" onClick={addNote}>Create a Note</button>
    </div>
  );
};

NoteListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired,
  Session: React.PropTypes.object.isRequired
};

export default createContainer(() =>{

  return {
    meteorCall: Meteor.call,
    Session
  };

}, NoteListHeader);
