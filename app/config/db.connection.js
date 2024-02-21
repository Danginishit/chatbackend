const Sequilize = require('sequelize');

const db_conf = require('./db.config');

// const sequelize = new Sequilize(db_conf.DB,db_conf.USER,db_conf.PASSWORD,{
//     host:db_conf.HOST,
//     dialect:db_conf.dialect,
// });
const sequelize = new Sequilize(`postgres://default:rF5p1IiqOgav@ep-purple-star-a4g447tj.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require`,{dialect: "postgres"});

module.exports = sequelize