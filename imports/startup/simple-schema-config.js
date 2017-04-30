import SimpleSchema from 'simpl-schema';
//import {Meteor} from 'meteor/meteor';


// SimpleSchema.defineValidationErrorTransform(error => {
//   const customError = new MyCustomErrorType(error.message);
//   customError.errorList = error.details;
//   return customError;
// });


SimpleSchema.defineValidationErrorTransform((e) => {
  return new Meteor.Error(400, e.message);
});
