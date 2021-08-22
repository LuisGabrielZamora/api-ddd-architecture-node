const {asClass, createContainer, asFunction, asValue} = require('awilix');
const Startup = require("./startup");
const Server = require("./server");

const {UserController} = require('../api/controllers');
const Routes = require('../api/routes');
const UserRoutes = require('../api/routes/user.routes');
const config = require('../config/environments');

const container = createContainer();

container.register({
  app: asClass(Startup).singleton(),
  server: asClass(Server).singleton()
})
  .register({
    UserController: asClass(UserController).singleton()
  })
  .register({
    router: asFunction(Routes).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton()
  })
;

module.exports = container;
