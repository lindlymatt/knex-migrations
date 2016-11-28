'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('concerts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('concerts').insert({
          id: 1,
          colName: 'rowValue1'
        })
      ]);
    });
};
