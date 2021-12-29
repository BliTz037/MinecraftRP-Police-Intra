import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface UserAttributes {
    id: number;
    username: string;
    usernameGame: string; //characters allows abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_
    password: string;
    rank: string;
    registrationNumber: number;
    isAdmin: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }
export interface UserCreationAttributesOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public usernameGame!: string;
    public password!: string;
    public rank!: string;
    public registrationNumber!: number;
    public isAdmin!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        usernameGame: {
            type: new DataTypes.STRING(16),
            allowNull: false
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        rank: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        registrationNumber: {
            type: new DataTypes.BIGINT,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        tableName: "user",
        paranoid: true
    }
);

export default User;