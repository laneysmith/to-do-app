
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', function(table) {
		table.increments();
		table.text('item');
		table.boolean('complete');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todo');
};
