
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
                    type: DataTypes.STRING
                },
                longitude: {
                    type: DataTypes.FLOAT
                },
                latitude: {
                    type: DataTypes.FLOAT
                },
            },
            {
                sequelize: sequelize
            }
        )
    }

    constructor({ message,longitude,latitude }) {
        super()

        this.message = message
        this.longitude = longitude
        this.latitude = latitude
    }
}
