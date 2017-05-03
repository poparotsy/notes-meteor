import React from 'react';
import {createContainer} from 'react-meteor-data';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem   from './NoteListItem';

export const NoteList = (props) => {

  return (
    <div>
      <NoteListHeader/>

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
  // subscribe to Meteor published method/s
  Meteor.subscribe('notes');
  return {
    notes: Notes.find().fetch()
  }

}, NoteList);
