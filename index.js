module.exports = {
  init: function () {
    var path = require('path');
    var q = require('q').defer();
    var inquirer = require('inquirer');

    var questions = [
      {
        type: 'input',
        name: 'name',
        message: 'friendly name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'short description:'
      },
      {
        type: 'input',
        name: 'nodeName',
        message: 'node module name:'
      },
      {
        type: 'input',
        name: 'moduleName',
        message: 'Angular module name?'
      },
      {
        type: 'input',
        name: 'author',
        message: 'your full name:'
      },
      {
        type: 'input',
        name: 'user',
        message: 'your GitHub user name:'
      }
    ];

    console.log('\n  A scfld project template for RightScale UI libraries\n');

    inquirer.prompt(questions, function (answers) {
      q.resolve({
        options: {
          data: answers
        },
        sources: [
          path.join(__dirname, 'template')
        ],
        globalDeps: ['gulp'],
        postInit: [
          'npm i'
        ]
      })
    });

    return q.promise;
  }
}
