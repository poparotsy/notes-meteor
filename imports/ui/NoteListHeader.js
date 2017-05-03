import React from 'react';
import {createContainer} from 'react-meteor-data';

export const NoteListHeader = (props) => {

  const addNote = (e) => {
    e.preventDefault();
    props.meteorCall('notes.insert');
    console.log('addNote clicked');
  };
  return (
    <div>
      <button onClick={addNote}>Create a Note</button>
    </div>
  );
};

NoteListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired
};

export default createContainer(() =>{

  return {
    meteorCall: Meteor.call
  };

}, NoteListHeader);
