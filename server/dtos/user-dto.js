export default class UserDto {
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
  }

  email;
  id;
}
