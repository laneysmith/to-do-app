
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todo').insert({item: 'Ignore Bennett\'s phone calls', complete: false}),
        knex('todo').insert({item: 'Buy watermelon', complete: false}),
        knex('todo').insert({item: 'Learn AngularJS', complete: false})
      ]);
    });
};
