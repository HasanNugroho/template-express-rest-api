/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users' , (table) => {
        table.uuid('id').defaultTo(knex.fn.uuid());
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.specificType('location', 'POINT');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
