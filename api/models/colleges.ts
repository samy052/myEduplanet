import mongoose from "mongoose";

const newSchema1 = new mongoose.Schema({
   "Name" : String,
   uniqueId: String

});
const newSchema2 = new mongoose.Schema({
  formData: {
    collegeName: String,
    overview: String,
    courses: String,
    fees: String,
    scholarships: String,
    placements: String,
    infrastructure: String,
    gallery: String,
    review: String,
    faq: String,
    uniqueId: String

  },
});

export const collection1 = mongoose.model("colleges_summaries", newSchema1);
export const collection2 = mongoose.model("formdatas", newSchema2);
