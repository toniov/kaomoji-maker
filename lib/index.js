'use strict';
const inquirer = require('inquirer');
const funcs = require('./functions')

/**
 * CLI main menu
 * @return {Promise}
 */
function showMenu () {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Choose option:',
      choices: [
        {
          name: 'Create kaomoji',
          value: 'create'
        },
        {
          name: 'Copy saved kaomoji',
          value: 'get'
        },
        {
          name: 'Remove kaomoji',
          value: 'remove'
        },
        {
          name: 'Exit',
          value: 'exit'
        }
      ]
    }
  ]).then(a => {
    return funcs[a.option]();
  }).then(() => {
    return inquirer.prompt([{
      type: 'confirm',
      name: 'exit',
      message: 'Exit utility: (Y/n)',
      default: true
    }]);
  }).then((a) => {
    if (a.exit) {
      return funcs.exit();
    }
    showMenu();
  });
}

// Execute main menu and handle error
module.exports = showMenu()
  .catch(e => {
    console.log('Something failed:');
    console.log(e);
    process.exit(1);
  });
