import User from "./models/User";
import Criminal from "./models/Criminal";
import * as bcrypt from "bcrypt";

const isDev = process.env.NODE_ENV === 'development'

const adminInit = async () => {
    User.findOne({ where: { username: "admin"}}).then(async (result) => {
        if (result) {
            console.log("Administrator account OK");
            return;
        }
        console.log("No administrator account created. Creation in progress");
        let passwordHash:string = await bcrypt.hash(process.env.ADMIN_PASSWORD || "admin", 10);
        User.create({
            username: "admin",
            usernameGame: "God",
            password:  passwordHash,
            rank: "Administrator",
            registrationNumber: 9999999,
            isAdmin: true
        }).then(() => {
            console.log("Administrator created !");
            console.log("Username:", "admin");
            console.log("Password:", process.env.ADMIN_PASSWORD|| "admin");
        }).catch((error) => {console.error(error)});
    })
}

const dbInit = async () => {
    await User.sync({ alter: isDev });
    await Criminal.sync({ alter: isDev });
    await adminInit();
};

export default dbInit;