Package.describe({
  summary: 'Google api loader for Meteor'
});

Package.on_use(function (api) {
  api.add_files('lib/jsapi.js', 'client');
});
