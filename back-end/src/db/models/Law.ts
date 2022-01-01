import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface LawAttributes {
    id: number;
    title: string;
    penalSanction: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface LawCreationAttributes extends Optional<LawAttributes, "id"> { }
export interface LawCreationAttributesOutput extends Required<LawAttributes> { }

class Law extends Model<LawAttributes, LawCreationAttributes> implements LawAttributes {
    public id!: number;
    public title!: string;
    public penalSanction!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Law.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        penalSanction: {
            type: DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        tableName: "law",
        paranoid: true
    }
);

export default Law