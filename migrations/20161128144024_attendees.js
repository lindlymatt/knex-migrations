'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('attendees', table => {
    // Creates columns for: id, concert_id, name and age.
    table.increments();
    table.integer('concert_id').notNullable()
      .references('id')
      .inTable('concerts')
      .onDelete('cascade')
      .index();
    table.text('name');
    table.integer('age');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('attendees');
};
