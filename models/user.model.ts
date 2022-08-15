class UserModel {
  id: string | number;
  name: string;
  role: string;
  avatar: string;

  constructor({ id = "", role = "", name = "", avatar = "" }) {
    this.id = id;
    this.role = role;
    this.name = name;
    this.avatar = avatar;
  }
}

export default UserModel;
