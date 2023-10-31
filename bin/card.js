#!/usr/bin/env node

import chalk from 'chalk'
import boxen from 'boxen'

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

const data = {
  name: chalk.white('Vaishnav Manoj'),
  handle: chalk.cyan('@wishee'),
  labelWork: chalk.white.bold('Profession:'),
  work: chalk.white('Student, SRM Institute of Science and Technology'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/vaishnav-mk'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://linkedin.com/in/vaishnav-mk'),
  labelResume: chalk.white.bold('    Resume:'),
  resume: chalk.cyan('https://vaishnav.one/resume'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('https://vaishnav.one'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.red('npx') + ' ' + chalk.white('wishee'),
}

const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const resuming = `${data.labelResume}  ${data.resume}`
const carding = `${data.labelCard}  ${data.npx}`

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  resuming +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))