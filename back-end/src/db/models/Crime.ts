import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface CrimeAttributes {
    id: number;
    criminalId: number;
    crimeCommitted: string;
    sanction: string;
    description: string;
    createdBy: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface CrimeCreationAttributes extends Optional<CrimeAttributes, "id"> {}
export interface CrimeCreationAttributesOutput extends Required <CrimeAttributes> {}

class Crime extends Model<CrimeAttributes, CrimeCreationAttributes> implements CrimeAttributes {
    public id!: number;
    public criminalId!: number;
    public crimeCommitted!: string;
    public sanction!: string;
    public description!: string;
    public createdBy!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Crime.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        criminalId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        crimeCommitted: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        sanction: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(280),
            defaultValue: "N/A",
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
        tableName: "crime",
        paranoid: true        
    }
);

export default Crime