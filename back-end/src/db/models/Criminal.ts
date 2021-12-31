import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface CriminalAttributes {
    id: number;
    firstName: string;
    lastName: string;
    birthday: Date;
    sexe: string;
    physicalDescription: string;
    usernameGame: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface CriminalCreationAttributes extends Optional<CriminalAttributes, "id"> {}
export interface CriminalCreationAttributesOutput extends Required<CriminalAttributes> {}

class Criminal extends Model<CriminalAttributes, CriminalCreationAttributes> implements CriminalAttributes {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public birthday!: Date;
    public sexe!: string;
    public physicalDescription!: string;
    public usernameGame!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Criminal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        lastName: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        birthday: {
            type: new DataTypes.DATE,
            allowNull: false
        },
        sexe: {
            type: new DataTypes.STRING(16),
            allowNull: false
        },
        physicalDescription: {
            type: new DataTypes.STRING(280),
            defaultValue: "N/A",
            allowNull: true
        },
        usernameGame: {
            type: new DataTypes.STRING(16),
            allowNull: false
        },
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        tableName: "criminal",
        paranoid: true
    }
);

export default Criminal;