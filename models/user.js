import { Model } from 'sequelize'

export default class User extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        username: {
          type: DataTypes.STRING
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          },
          unique: {
            args: true,
            msg: 'Email already in use'
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password_confirm: {
            type: DataTypes.VIRTUAL,
            allowNull: false
        }
      },
      {
        sequelize: sequelize
      }
    )
  }
}
