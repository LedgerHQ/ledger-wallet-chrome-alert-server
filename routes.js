'use strict';
module.exports = function(app) {
  var ctrl = require('./controller.js');
  app.route('/message')
    .get(ctrl.message)
};