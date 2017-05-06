import React from 'react';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';


export const NoteListItem = (props) => {

  const className = props.note.selected ? 'item item--selected' : 'item';

  return (
    <div className={className} onClick={() => {
      props.Session.set('selectedNoteId', props.note._id);
    }}>
      <h5 className="item--title">{props.note.title || 'untitled note'}</h5>
      {/* {props.note.selected ? 'selected' : undefined} */}
      <p className="item--subtitle">{ moment(props.note.updatedAt).format('DD/M/YY') }</p>
    </div>
  );

};

NoteListItem.propTypes = {
  note: React.PropTypes.object.isRequired
};

export default createContainer(() => {
  return { Session };
}, NoteListItem);
