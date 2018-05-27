
import { Model } from 'sequelize'

export default class Tags extends Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                message: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                longitude: {
                    type: DataTypes.FLOAT,
                    allowNull: false
                },
                latitude: {
                    type: DataTypes.FLOAT,
                    allowNull: false
                },
            },
            {
                sequelize
            }
        )
    }
}
