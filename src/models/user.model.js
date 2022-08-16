class UserModel {
  constructor({ id = '', role = '', name = '', avatar = '' }) {
    this.id = id;
    this.role = role;
    this.name = name;
    this.avatar = avatar;
  }
}

export default UserModel;
