import React from 'react';
import {createContainer} from 'react-meteor-data';


export default NoteListEmptyItem = (props) => {

  return (
      <p className="empty-item">You don't have any notes.</p>
          );

};



// export default createContainer(() => {
//
// }, NoteListEmptyItem);
