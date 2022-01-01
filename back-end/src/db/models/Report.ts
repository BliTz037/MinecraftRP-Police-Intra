import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface ReportAttributes {
    id: number;
    title: string;
    text: string;
    criminalLink: number;
    createdBy: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface ReportCreationAttributes extends Optional<ReportAttributes, "id"> { }
export interface ReportCreationAttributesOutput extends Required<ReportAttributes> { }

class Report extends Model<ReportAttributes, ReportCreationAttributes> implements ReportAttributes {
    public id!: number;
    public title!: string;
    public text!: string;
    public criminalLink!: number;
    public createdBy!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Report.init(
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
        text: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        criminalLink: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        tableName: "report",
        paranoid: true
    }
);

export default Report