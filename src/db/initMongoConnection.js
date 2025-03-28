const mongoose = require("mongoose");

const initMongoConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo connection successfully established!");
    } catch (error) {
        console.error("Mongo connection failed!", error);
        process.exit(1);
    }
};

module.exports = initMongoConnection;
