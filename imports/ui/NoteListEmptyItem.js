import React from 'react';
import {createContainer} from 'react-meteor-data';


export default NoteListEmptyItem = (props) => {

  return (
    <div>
      <p>You don't have any notes.</p>
    </div>
  );

};



// export default createContainer(() => {
//
// }, NoteListEmptyItem);
