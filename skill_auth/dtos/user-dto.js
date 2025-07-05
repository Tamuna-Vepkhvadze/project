module.exports = class UserDto {
  id;
  email;
  name;
  lastName;
  img;
  phone;
  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.name = model.name;
    this.lastName = model.lastName;
    this.img = model.img;
    this.phone = model.phone;
  }
};
