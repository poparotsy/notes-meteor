import expect from 'expect';
import {Notes} from './notes';


if (Meteor.isServer) {
  describe('notes', function() {

    const noteOne = {
      _id: 'testNoteId1',
      title: 'My Title',
      body: 'Note body for testing',
      updatedAt: 0,
      userId: 'testUserId1'
    };
    const noteTwo = {
      _id: 'testNoteId2',
      title: 'noteTwo title',
      body: 'noteTwo body test',
      updatedAt: 0,
      userId: 'testUserId2'
    };

    // lifesycle method
    beforeEach(function() {
      Notes.remove({});
      Notes.insert(noteOne);
      Notes.insert(noteTwo);
    });

    it('should insert new note', function () {
      const userId = 'testid';
      const _id = Meteor.server.method_handlers['notes.insert'].apply({userId});

      expect(Notes.findOne({_id, userId})).toExist();

    });

    it('should not insert note if not authorized', function(){
      expect(() => {
        Meteor.server.method_handlers['notes.insert']();
      }).toThrow();
    });

    it('should remove note', function() {
      Meteor.server.method_handlers['notes.remove'].apply({userId: noteOne.userId}, [noteOne._id]);
      expect(Notes.findOne({_id: noteOne._id})).toNotExist();
    });

    it('should not remove if not authenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({}, [noteOne._id]);
      }).toThrow();
    });

    it('should not remove note if invalid id', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({userId: noteOne.userId}, []);
      }).toThrow();
    });

    it('should update note', function() {
      const title = 'this is an updated title';
      Meteor.server.method_handlers['notes.update'].apply({
        userId: noteOne.userId
      }, [
        noteOne._id,
        {title}
      ]);
      const note = Notes.findOne(noteOne._id);
      expect(note.updatedAt).toBeGreaterThan(0);
      expect(note).toInclude({
        title: title,
        body: noteOne.body
      });
    });

        it('should throw an error if update extra objects', function() {
          expect(() => {
            Meteor.server.method_handlers['notes.update'].apply({
              userId: noteOne.userId
            }, [
              noteOne._id,
              {
                title: noteOne.title,
                body: 'valid body test should not throw an error',
                extra: 'some invalid input'
                }
            ]);
          }).toThrow();
        });

        it('should not update note if user was not creator', function() {
          const title = 'this is an updated title';
          Meteor.server.method_handlers['notes.update'].apply({
            userId: 'testid'
          }, [
            noteOne._id,
            {title}
          ]);
          const note = Notes.findOne(noteOne._id);

          expect(note).toInclude(noteOne);
        });


          it('should not update if not authenticated', function() {
            expect(() => {
              Meteor.server.method_handlers['notes.update'].apply({}, [noteOne._id]);
            }).toThrow();
          });

          it('should not update note if invalid id', function() {
            expect(() => {
              Meteor.server.method_handlers['notes.update'].apply({userId: noteOne.userId}, []);
            }).toThrow();
          });

          it('should return a users notes', function() {
            const res = Meteor.server.publish_handlers.notes.apply({userId: noteOne.userId});
            const notes = res.fetch();
            expect(notes.length).toBe(1);
            expect(notes[0]).toEqual(noteOne);
          });


          it('should not return any notes without userID', function() {
            const res = Meteor.server.publish_handlers.notes.apply({userId: 'invalid'});
            const notes = res.fetch();

            expect(notes.length).toBe(0); 
          });

      });
}
