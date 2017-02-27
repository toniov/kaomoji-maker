'use strict';
const inquirer = require('inquirer');
const fs = require('fs');
const ncp = require("copy-paste");
const homeDir = require('os').homedir();

module.exports.create = () => {
  const parts = ['arms_symmetric', 'arms_left', 'bodies_symmetric', 'bodies_left', 'cheeks', 'eyes', 'mouths_noses', 'bodies_right', 'arms_right'].map(fileName =>
    fs.readFileSync(`${__dirname}/parts/${fileName}.txt`, 'utf8').split('\n')
  );
  return inquirer.prompt([
    {
      type: 'list',
      name: 'leftArm',
      message: 'Choose left arm',
      choices: ['', ...parts[1], ...parts[0]]
    },
    {
      type: 'list',
      name: 'leftBody',
      message: 'Choose left body',
      choices: ['', ...parts[3], ...parts[2]]
    },
    {
      type: 'list',
      name: 'leftCheek',
      message: 'Choose left cheek',
      choices: ['', ...parts[4]]
    },
    {
      type: 'list',
      name: 'leftEye',
      message: 'Choose left eye',
      choices: ['', ...parts[5]]
    },
    {
      type: 'list',
      name: 'noseMouth',
      message: 'Choose nose/mouth',
      choices: ['', ...parts[6]]
    },
    {
      type: 'list',
      name: 'rightEye',
      message: 'Choose right eye',
      choices: ['', ...parts[5]]
    },
    {
      type: 'list',
      name: 'rightCheek',
      message: 'Choose right cheek',
      choices: ['', ...parts[4]]
    },
    {
      type: 'list',
      name: 'rightBody',
      message: 'Choose right body',
      choices: ['', ...parts[7], ...parts[2]]
    },
    {
      type: 'list',
      name: 'rightArm',
      message: 'Choose right arm',
      choices: ['', ...parts[8], ...parts[0]]
    },
  ]).then(a => {
    const kaomoji = `${a.leftArm}${a.leftBody}${a.leftCheek}${a.leftEye}${a.noseMouth}${a.rightEye}${a.rightCheek}${a.rightBody}${a.rightArm}`;
    console.log('Your kaomoji:', kaomoji);
    this.kaomoji = kaomoji;
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'copy',
        message: 'Copy to clipboard: (Y/n)',
        default: true
      },
      {
        type: 'confirm',
        name: 'save',
        message: 'Save kaomoji: (Y/n)',
        default: true,
        when: (a) => {
          if (a.copy) {
            ncp.copy(this.kaomoji);
            console.log('Kaomoji copied to clipboard')
          }
          return true;
        }
      }
    ]);
  }).then(a => {
    if (a.save) {
      fs.writeFileSync(`${homeDir}/saved_kaomoji.txt`, `\n${this.kaomoji}`, { flag: 'a' });
      console.log(`Kaomoji saved in ${homeDir}`);
    }
  });
}

module.exports.get = () => {
  let kaomojiList;
  try {
    kaomojiList = fs.readFileSync(`${homeDir}/saved_kaomoji.txt`, 'utf8').split('\n');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Kamoji not found in ${homeDir}/saved_kaomoji.txt ¯\\_(ツ)_/¯`);
      return;
    }
  }
  return inquirer.prompt([
    {
      type: 'list',
      name: 'kaomoji',
      message: 'Copy to clipboard saved kaomoji',
      choices: kaomojiList
    }
  ]).then(a => {
    ncp.copy(a.kaomoji);
    console.log('Kaomoji copied to clipboard');
  });
}

module.exports.remove = () => {
  console.log('Not implemented yet (⊙︿⊙)')
}

module.exports.exit = () => {
  console.log('See you! (・ω・)ノ');
  process.exit();
}
