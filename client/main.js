Meteor.subscribe('posts');
if (Meteor.isClient) {
  Meteor.startup(function() {
    Tracker.autorun(function() {
      console.log('There are ' + Posts.find().count() + ' posts');
    });
  });
}