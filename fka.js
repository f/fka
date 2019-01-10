#!/usr/bin/env node
'use strict';
var c = require('chalk');
var link = require('terminal-link');
var img = require('terminal-image');
var got = require('got');
var ww = require('word-wrap');
var iq = require('inquirer');
var opn = require('opn');

got('https://avatars3.githubusercontent.com/u/196477?s=600&v=4', {encoding: null})
.then(function (image) { return img.buffer(image.body) })
.then(function (image) {

console.log(image)
console.log(ww(`
Hello, this is ${c.blue.bold("Fatih Kadir Akın")}!

I'm a passionated ${c.bgRed.white.bold("software developer")} living in ${c.bold("Istanbul, Turkey")}, working for 🐦 ${link(c.hex('#7BBABB').bold('HostMaker.co'), 'https://hostmaker.co')}.

I ${c.bold("wrote a book")} about ${c.underline.bold.yellow("JavaScript")}. I love being part of development of web technologies. I like to ${c.bold("organize conferences and giving talks")}.

I love ${c.underline.bold.green("open source development")} and I build things on my GitHub profile ${link(c.red.bold('github.com/f'), 'https://github.com/f')}.

I love ${c.bold.yellow("JavaScript")}, ${c.bold.red("Ruby (and RoR)")} and the ${c.bold.gray("Crystal Language")}.

`.trim(), { width: 200, trim: true }));

console.log('\n\n')
iq.prompt([
  {
    type: 'list',
    message: 'Do you want to learn more about me?',
    name: 'open',
    choices: [
      { name: c.gray(`💻  What are you doing about Open Source? (${c.bold('GitHub')})`), value: 'https://github.com/f' },
      { name: c.cyan(`🐦  Are you a tweeter? (${c.bold('Twitter')})`), value: 'https://twitter.com/fkadev' },
      { name: c.blue(`🏹  Tell me about your CV (${c.bold('LinkedIn')})`), value: 'https://linkedin.com/in/fatihkadirakin' },
      { name: c.red('👋  Nope. Bye.\n'), value: false }
    ]
  }
]).then(function (a) { opn(a.open); process.exit() });
});
