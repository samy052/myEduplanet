import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { collection1, collection2 } from "./models/colleges";
import { UserModel } from "./models/users";

const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

mongoose
  .connect("mongodb://127.0.0.1:27017/Summary_Tables")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.log("error");
  });

//route to fetch college data from  dataBASE

// app.get("/getColleges", async (req, res) => {

//  const data = await collection1.find({});

//   if (!data) {
//     res.json({ msg: "no data found" });
//   } else {
//     res.json(data);
//   }
// });

app.get("/CollegeName", async (req, res) => {
  const data = await collection1.find({});

  if (!data) {
    res.json({ msg: "no data found" });
  } else {
    res.json(data);
  }
});
app.get("/admin", async (req, res) => {
  const data = await collection2.find({});
  if (!data) {
    res.json({ msg: "no data found" });
  } else {
    res.json(data);
  }
});

// app.put("/CollegeData", async (req, res) => {
//   //const data = await collection2.findByIdAndUpdate({});
//   const data = await collection2.findByIdAndUpdate({}).select("universityName");

//   if (!data) {
//     res.json({ msg: "no data found" });
//   } else {
//     res.json(data);
//   }
// });

// app.get('/getColleges', async (req, res) => {
//   try {
//     const allData = await collection.find().exec(); // Use exec() to execute the query
//     if (allData.length === 0) {
//       res.json({ msg: 'No data' });
//     } else {
//       res.json(allData);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: 'Internal Server Error' });
//   }
// });
app.post("/admin", async (req, res) => {
  const { formData } = req.body;
  const data = {
    formData: formData,
  };
  await collection2.insertMany([data]);
});
app.post("/signup", async (req, res) => {
  await UserModel.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((error) => res.json(error));
});

let data: any;
app.post("/login", async (req, res) => {
  const { logPass, logEmail } = req.body;
  const userData = await UserModel.findOne({ email: logEmail });
  if (userData) {
    if (userData.password === logPass) {
      if (userData.email === "specialId@myEduPlanet.com") {
        res.json("69");
      } else {
        res.json("Success");
      }
      data = userData;
    } else {
      res.json("Invalid");
    }
  } else {
    res.json("No User");
  }
});

app.get("/profile", (req, res) => {
  res.json(data);
});

app.get("/logout", (req, res) => {
  data = 0;
  res.json(data);
  console.log(data);
});
app.get("/", (req, res) => {
  res.send("Working with typescript is tough 😶‍🌫️");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
