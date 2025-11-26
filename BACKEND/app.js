const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express()

const dotenv = require('dotenv');
dotenv.config()

app.use(express.json());

const cors = require('cors')
app.use(cors())

const serviceRouter = require("./routes/serviceRoutes");
app.use('/service', serviceRouter)

const contactEnquiryRouter = require("./routes/contactEnquiryRoutes");
app.use('/contactenquiry', contactEnquiryRouter)

const courseRouter = require("./routes/courseRoutes");
app.use('/course', courseRouter)

app.use("/uploads", express.static("uploads"));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(process.env.PORT, () => {
    console.log(`Server Running on PORT ${process.env.PORT}`)
})