/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {tableName: 'users',
//creating some primitive datatypes for understanding!
  attributes: {
    name: {
      type: 'string',
      required: false,
    },
    age: {
      type: 'integer',
      required: false
    }

  }
};
