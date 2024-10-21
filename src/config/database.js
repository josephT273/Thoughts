import mongoose from 'mongoose';
const database = () => {
    mongoose.connect(process.env.MONGODB_URL);
    const db = mongoose.connection;
    return db;
};
export default database;
