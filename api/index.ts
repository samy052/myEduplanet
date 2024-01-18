import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { collection1, collection2 } from "./models/colleges";
import BlogModel from "./models/blogs";
import authRouter from "./routes/auth.route";
import NotificationModel from "./models/notification";

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
  // const db = mongoose.connection;
  
  
  app.use("/api/auth", authRouter);

  //middleware for errors
  // app.use(
  //   (
  //     err: { statusCode: number; message: string },
  //     req: { body: any },
  //     res: any,
  //     next: (arg0: unknown) => void
  //   ) => {
  //     const statusCode = err.statusCode  500;
  //     const message = err.message  "Internal Server Error";
  //     return res.status(statusCode).json({
  //       sucess: false,
  //       statusCode,
  //       message,
  //     });
  //   }
  // );

  // db.once('open', async () => {
  //   try {
  //     // Step 1: Update collection1
  //     const allColleges = await collection1.find({});
  
  //     for (let i = 0; i < allColleges.length; i++) {
  //       const college = allColleges[i];
  //       await collection1.updateOne(
  //         { _id: college._id },
  //         { $set: { uniqueId: i + 1 } }
  //       );
  //     }
  
  //     console.log("Unique IDs added successfully to collection1");
  
  //     // Step 2: Update collection2
  //     const allColleges1 = await collection1.find({});
  //     const allColleges2 = await collection2.find({});
  
  //     for (let i = 0; i < allColleges1.length; i++) {
  //       const college1 = allColleges1[i];
  //       const matchingCollege2 = allColleges2.find(college2 => college2.formData?.collegeName === college1.Name);
  
  //       if (matchingCollege2) {
  //         await collection2.updateOne(
  //           { Name: college1.Name },
  //           { $set: { uniqueId: i + 1 } }
  //         );
  //         console.log("Unique IDs added successfully to collection2");
  //       }
        
  //     }
  
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });

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


app.post("/admin", async (req, res) => {
  const { formData } = req.body;
  const data = {
    formData: formData,
  };
  await collection2.find([data]);
});





app.get("/", (req, res) => {
  res.send("Working with typescript is tough 😶‍🌫️");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch a single blog by ID
app.get('/api/blogs/:blogId', async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    console.error('Error fetching single blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





// Insert a new blog
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;
    const newBlog = new BlogModel({ title, content, imageUrl });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error('Error inserting blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Fetch all exam notifications
app.get('/api/notifications', async (req, res) => {
  try {
    const notifications = await NotificationModel.find();
    res.json(notifications);
  } catch (error) {
    console.error('Error fetching exam notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch a single exam notification by ID
app.get('/api/notifications/:notificationId', async (req, res) => {
  try {
    const { notificationId } = req.params;
    const notification = await NotificationModel.findById(notificationId);

    if (!notification) {
      return res.status(404).json({ error: 'Exam notification not found' });
    }

    res.json(notification);
  } catch (error) {
    console.error('Error fetching single exam notification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Insert a new exam notification
app.post('/api/notifications', async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;
    const newNotification = new NotificationModel({ title, content, imageUrl });
    const savedNotification = await newNotification.save();
    res.json(savedNotification);
  } catch (error) {
    console.error('Error inserting exam notification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
