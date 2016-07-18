var knex = require('./knex');

module.exports = {
  getTasks: function() {
    return knex('todo').select();
  },
  addTask: function(task) {
    return knex('todo').insert({item: task.item, complete: false});
  },
  completeTask: function(id) {
  return knex('todo').where({id: id}).update({complete: true});
  }
};
