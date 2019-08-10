var ghpages = require('gh-pages');

ghpages.publish('public', {
  repo: 'git@github.com:trslater/trslater.github.io.git',
  branch: 'master',
}, function () {});