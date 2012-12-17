var tests = [
  // link to test files here
  'tests/app/bestPractices',
  'tests/app/arrays',
  'tests/app/async',
  'tests/app/flowControl',
  'tests/app/functions',
  'tests/app/logicalOperators',
  'tests/app/modules',
  'tests/app/objects',
  'tests/app/regex'
];

if (typeof window !== 'undefined') {
  tests.push('tests/app/async');
} else {
  var requirejs = require('requirejs');
  requirejs.config({
    baseUrl : __dirname + '/../',
    nodeRequire : require,
    paths : {
      // Libraries
      underscore : 'lib/underscore',

      // Shim Plugin
      use : 'lib/plugins/use',
      text : 'lib/plugins/text',
      jquery : 'lib/jquery'
    },

    use : {
      underscore : {
        attach : '_'
      }
    }
  });
}

requirejs(tests, function() {
  if (typeof mocha !== 'undefined') {
    mocha.run();
  }
});
