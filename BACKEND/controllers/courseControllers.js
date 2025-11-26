const courseModel = require("../models/courseModel");
const fs = require("fs");
const path = require("path");

// Add Course
const addCourse = async (req, res) => {
  try {
    const courseData = new courseModel({
      courseImage: req.file.filename,
      courseName: req.body.courseName,
      courseDescription: req.body.courseDescription,
      courseShortDescription: req.body.courseShortDescription,
      courseTopicsCount: req.body.courseTopicsCount,
      courseHours: req.body.courseHours,
      courseAbout: req.body.courseAbout,
      courseYouLearn: req.body.courseYouLearn
    });

    await courseData.save();
    res.status(201).json({ message: "Course added successfully", data: courseData });
  } catch (err) {
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

// Get All Courses
const getCourse = async (req, res) => {
  try {
    const courseData = await courseModel.find();
    res.status(200).send(courseData);
  } catch (err) {
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

// Delete Course
const deleteCourse = async (req, res) => {
  try {
    await courseModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Data is Deleted");
  } catch (err) {
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

// Update Course

const updateCourse = async (req, res) => {
  try {
    const course = await courseModel.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Only try to delete old image if it exists AND a new file is uploaded
    if (req.file && course.courseImage) {
      const oldImagePath = path.join(__dirname, "../uploads", course.courseImage);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // If courseYouLearn is sent as JSON string, parse it
    let courseYouLearn = req.body.courseYouLearn;
    if (typeof courseYouLearn === "string") {
      try {
        courseYouLearn = JSON.parse(courseYouLearn);
      } catch (err) {
        // keep as string array if not JSON
        courseYouLearn = [courseYouLearn];
      }
    }

    const updatedData = {
      ...req.body,
      courseYouLearn,
      ...(req.file && { courseImage: req.file.filename }),
    };

    const courseUpdateData = await courseModel.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.status(200).json({ message: "Course updated successfully", data: courseUpdateData });
  } catch (err) {
    console.error("UpdateCourse Error:", err);
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

module.exports = { addCourse, getCourse, deleteCourse, updateCourse };