const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 20;

    for (let i = 0; i < limit; i++) {
    this.users.push({
      id: faker.string.uuid(),
      userName: faker.internet.username(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
    // console.log(users);
  };
  };

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  };

  async find() {
    const users = await models.User.findAll({
      include: ['customer']
    });
    return users;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('User not found.');
    };
    return user;
  };

  async update(id, changes) {
    const user = await this.findOne(id);
    const userUpdate = await user.update(changes);
    return userUpdate;
  };

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return {
      message: 'Deleted successfully.',
      id
    }
  };
};

module.exports = UsersService;
