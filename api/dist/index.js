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
const blogs_1 = __importDefault(require("./models/blogs"));
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
const db = mongoose_1.default.connection;
db.once('open', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Step 1: Update collection1
        const allColleges = yield colleges_1.collection1.find({});
        for (let i = 0; i < allColleges.length; i++) {
            const college = allColleges[i];
            yield colleges_1.collection1.updateOne({ _id: college._id }, { $set: { uniqueId: i + 1 } });
        }
        console.log("Unique IDs added successfully to collection1");
        // Step 2: Update collection2
        const allColleges1 = yield colleges_1.collection1.find({});
        const allColleges2 = yield colleges_1.collection2.find({});
        for (let i = 0; i < allColleges1.length; i++) {
            const college1 = allColleges1[i];
            const matchingCollege2 = allColleges2.find(college2 => { var _a; return ((_a = college2.formData) === null || _a === void 0 ? void 0 : _a.collegeName) === college1.Name; });
            if (matchingCollege2) {
                yield colleges_1.collection2.updateOne({ Name: college1.Name }, { $set: { uniqueId: i + 1 } });
                console.log("Unique IDs added successfully to collection2");
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}));
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
app.get('/api/blogs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogs_1.default.find();
        res.json(blogs);
    }
    catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Fetch a single blog by ID
app.get('/api/blogs/:blogId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blogId } = req.params;
        const blog = yield blogs_1.default.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blog);
    }
    catch (error) {
        console.error('Error fetching single blog:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Insert a new blog
app.post('/api/blogs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, imageUrl } = req.body;
        const newBlog = new blogs_1.default({ title, content, imageUrl });
        const savedBlog = yield newBlog.save();
        res.json(savedBlog);
    }
    catch (error) {
        console.error('Error inserting blog:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
