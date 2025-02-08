import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
      .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGE" })
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
      });
  };


//mongodb+srv://<db_username>:<db_password>@cluster0.yoedw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//codewithabhi