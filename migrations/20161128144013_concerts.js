'use strict';
exports.up = function (knex, Promise) {
  return knex.schema.createTable('concerts', table => {
    // Create columns for id, name, price, started_at and ended_at.
    table.increments();
    table.text('name').notNullable().defaultsTo('');
    table.decimal('price', 8, 2).notNullable().defaultsTo(1.00);
    table.timestamp('started_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('ended_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('concerts');
};
