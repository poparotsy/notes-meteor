import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Notes} from '../api/notes';


export class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBodyChange(e){
      // e.preventDefault();
      this.props.call('notes.update', this.props.note._id, {
        body: e.target.value
      })
    }
    handleTitleChange(e){
        // e.preventDefault();
        this.props.call('notes.update', this.props.note._id, {
          title: e.target.value
        })
      }

  render() {
      if(this.props.note) {
        return (
          <div>
          <input value={this.props.note.title}
          placeholder="note title"
          onChange={this.handleTitleChange.bind(this)}/>
          <textarea
            value={this.props.note.body}
            placeholder="Your note here."
            onChange={this.handleBodyChange.bind(this)}/>
          <button>delete this note</button>
          </div>
          )
      } else {
        return (
          <p>
            {this.props.selectedNoteId ? 'Note not found' : 'pick/create a note go get started.'}
          </p>
        )
      }
  }
}

Editor.propTypes = {
  note: React.PropTypes.object,
  selectedNoteId: React.PropTypes.string
};

export default createContainer(() =>{
  const selectedNoteId = Session.get('selectedNoteId');
  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call
  }

}, Editor);
