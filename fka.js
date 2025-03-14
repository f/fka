#!/usr/bin/env node
'use strict';
var c = require('chalk');
var link = require('terminal-link');
var img = require('terminal-image');
var got = require('got');
var ww = require('word-wrap');
var iq = require('inquirer');
var opn = require('open');

got('https://avatars3.githubusercontent.com/u/196477?s=600&v=4', {responseType:'buffer'})
.then(function (image) { return img.buffer(image.body, {width: '33%'}) })
.then(function (image) {

console.log(image)
console.log(ww(`
Hello, this is ${c.blue.bold("Fatih Kadir Akın")}, award-winning ${c.yellow.bold("GitHub Star ⭐️")}!

I'm a passionate ${c.bgRed.white.bold("software developer")} living in ${c.bold("Istanbul, Turkey")}, working for ${link(c.hex('#3858A2').bold('Teknasyon'), 'https://teknasyon.com')} as the ${c.bgRed.white.bold("DevRel Manager")}.
I ${c.bold("wrote a book")} about ${c.underline.bold.yellow("JavaScript")}. I love being part of development of web technologies. I like to ${c.bold("organize conferences and give talks")}.
I love ${c.underline.bold.green("open source development")} and I build things on my GitHub profile ${link(c.red.bold('github.com/f'), 'https://github.com/f')}.
I love ${c.bold.yellow("JavaScript")} and ${c.bold.red("Ruby (and RoR)")}.

`.trim(), { width: 200, trim: true }));

console.log('\n\n')
iq.prompt([
  {
    type: 'list',
    message: 'Do you want to learn more about me?',
    name: 'open',
    choices: [
      { name: c.yellow(`⭐️  My GitHub Star profile (${c.bold('GitHub')})`), value: 'https://stars.github.com/profiles/f/' },
      { name: c.gray(`💻  What am I doing about Open Source? (${c.bold('GitHub')})`), value: 'https://github.com/f' },
      { name: c.cyan(`𝕏  What do I think? (${c.bold('X')})`), value: 'https://x.com/fkadev' },
      { name: c.blue(`🦋  What do I also think? (${c.bold('Bluesky')})`), value: 'https://bsky.app/profile/fka.dev' },
      { name: c.blue(`🏹  Curriculum vitae, the path of my life (${c.bold('LinkedIn')})`), value: 'https://linkedin.com/in/fatihkadirakin' },
      { name: c.red('👋  Nope. Bye.\n'), value: false }
    ]
  }
]).then(function (a) { opn(a.open); process.exit() }).catch(function () {});
}).catch(function (e) { console.log(e)});
