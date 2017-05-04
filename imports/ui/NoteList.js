import React from 'react';
import {createContainer} from 'react-meteor-data';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem   from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

export const NoteList = (props) => {

  return (
    <div>
      <NoteListHeader/>

      {props.notes.length === 0 ? <NoteListEmptyItem/> : undefined}

      {props.notes.map((note) => {
        return (<NoteListItem key={note._id} note={note}/>);
      })}

      Note List { props.notes.length }
    </div>
  );

};


NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  // subscribe to Meteor published method/s
  Meteor.subscribe('notes');
  return {
    notes: Notes.find().fetch().map((note) => {
      return {
        ...note,
        selected: note._id === selectedNoteId
      }
      })
    }
}, NoteList);
