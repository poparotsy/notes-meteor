import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';


// Stateless functional components example

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          <div className="page-content--sidebar">
          <NoteList/>
          </div>
          <div className="page-content--main"> 
            <Editor/>
          </div>

        </div>
    </div>
  );
}
