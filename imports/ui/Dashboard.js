import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';


// Stateless functional components example

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          <NoteList/>
        </div>
    </div>
  );
}
