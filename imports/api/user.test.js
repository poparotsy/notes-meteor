import expect from 'expect';
import { validateNewUser } from './users';

if (Meteor.isServer) {
  describe('users', function() {
    it('should allow valid email address', function() {
      const testUser = {
        emails: [
          {
            address: 'test@example.net'
          }
        ]
      };
      const res = validateNewUser(testUser);
      expect(res).toBe(true);
      });

      it('should reject invalid email', function() {
        expect(() => {
          const testUser = {
            emails: [
              {
                address: 'test.example.net'
              }
            ]
          };
          validateNewUser(testUser);
        }).toThrow();
      });


    });
};




// EXAMPLE
// it ('testName String or some Descrition', function ES5)
// avoid arrow function with Mocha
//
// const add = ( a, b) => {
//   if (typeof b !== 'number') {
//     return a + a;
//   }
//   return a + b;
// };
//
// const square = (a) => a * a;
//
// // Describe block is to group test cases/fuctins
//
// describe('test add function/s', function() {
//   it('add two numbers', function(){
//     const res = add(11, 9);
//     expect(res).toBe(20);
//     // Manual Test function, same as expect().toBe();
//     // if (res !== 20) {
//     //   throw new Error('result should be 20');
//     // }
//   });
//
//   it('should double a single number', function () {
//     const res = add(55);
//     expect(res).toBe(110);
//     });
// });
//
// describe('square', function() {
//   it('should square number', function() {
//     const res = square(3);
//   expect(res).toBe(9);
//   });
// });
