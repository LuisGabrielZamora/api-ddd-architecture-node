require('dotenv').config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const QA = require('./qa');
const {NODE_ENV} = process.env;

let currentEnv;
const envSelector = {
  'qa': QA,
  'production': PRODUCTION,
  'development': DEVELOPMENT,
};
currentEnv = envSelector[NODE_ENV];

module.exports = currentEnv;