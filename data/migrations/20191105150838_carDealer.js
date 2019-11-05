
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
        table.increments();
        table.float('vin').notNullable();
        table.string('make', 64).notNullable();
        table.string('model', 64).notNullable();
        table.float('mileage').notNullable();
        table.string('transmission', 64);
        table.string('status', 200);
    
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');

};
