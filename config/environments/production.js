module.exports = {
  PORT: process.env.PORT,
  DB: {
    user: 'postgres',
    password: 'secret',
    database: 'school',
    host: 'localhost',
    dialect: 'postgres'
  }
}