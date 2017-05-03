import React from 'react';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';


export const NoteListItem = (props) => {
  return (
    <div onClick={() => {
      props.Session.set('selectedNoteId', props.note._id);
    }}>
      <h5>{props.note.title || 'untitled note'}</h5>
      <p>{ moment(props.note.updatedAt).format('DD/M/YY') }</p>
    </div>
  );

};

NoteListItem.propTypes = {
  note: React.PropTypes.object.isRequired
};

export default createContainer(() => {
  return { Session };
}, NoteListItem);
