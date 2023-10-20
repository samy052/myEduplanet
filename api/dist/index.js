"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const colleges_1 = require("./models/colleges");
const users_1 = require("./models/users");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 4000;
mongoose_1.default
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
app.get("/CollegeName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield colleges_1.collection1.find({});
    if (!data) {
        res.json({ msg: "no data found" });
    }
    else {
        res.json(data);
    }
}));
app.get("/admin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield colleges_1.collection2.find({});
    if (!data) {
        res.json({ msg: "no data found" });
    }
    else {
        res.json(data);
    }
}));
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
app.post("/admin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formData } = req.body;
    const data = {
        formData: formData,
    };
    yield colleges_1.collection2.insertMany([data]);
}));
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield users_1.UserModel.create(req.body)
        .then((users) => {
        res.json(users);
    })
        .catch((error) => res.json(error));
}));
let data;
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { logPass, logEmail } = req.body;
    const userData = yield users_1.UserModel.findOne({ email: logEmail });
    if (userData) {
        if (userData.password === logPass) {
            if (userData.email === "specialId@myEduPlanet.com") {
                res.json("69");
            }
            else {
                res.json("Success");
            }
            data = userData;
        }
        else {
            res.json("Invalid");
        }
    }
    else {
        res.json("No User");
    }
}));
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
