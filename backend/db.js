import mongoose from "mongoose";
import config from "./config/key";

const mongoURI = config.mongoURI;

const connectDB = function () {
	mongoose
		.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			ignoreUndefined: true,
			useFindAndModify: false,
		})
		.then(() => console.log("mongoDB connected"))
		.catch((err) => console.log(err));
};

mongoose.connection.on('error', (err) => {
    console.log('mongoDB Error occurred', err);
});

export default connectDB;
