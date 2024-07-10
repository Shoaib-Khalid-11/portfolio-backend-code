import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required!"],
  },
  description: {
    type: String,
    required: [true, "Description is Required!"],
  },
  timeline: {
    from: {
      type: String,
      required: [true, "Start Date is Required!"],
    },
    to: String,
  },
});

export const Timeline = mongoose.model("Timeline", timelineSchema);
