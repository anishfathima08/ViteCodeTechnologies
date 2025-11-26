import React, { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const myContext = createContext();

const MyContextProvider = ({ children }) => {
    
    // Backend URL

    const url = "https://vitecodetechnologies-backend.onrender.com";

    const navigate = useNavigate();

    const [serviceTitle, setSeriviceTitle] = useState("");
    const [serviceOldPrice, setSeriviceOldPrice] = useState("");
    const [serviceNewPrice, setSeriviceNewPrice] = useState("");
    const [serviceDiscount, setSeriviceDiscount] = useState("");
    const [serviceDescription, setSeriviceDescription] = useState("");
    const [serviceFeatures, setSeriviceFeatures] = useState([]);

    // Service

    // Add new feature

    const addServiceFeature = () => {
        setSeriviceFeatures([...serviceFeatures, ""]);
    };

    // Remove a feature by index

    const removeServiceFeature = (index) => {
        const updated = serviceFeatures.filter((_, i) => i !== index);
        setSeriviceFeatures(updated);
    };

    // Update feature text

    const updateServiceFeature = (index, value) => {
        const updated = [...serviceFeatures];
        updated[index] = value;
        setSeriviceFeatures(updated);
    };

    // Service Add Function

    const serviceAddFun = (e) => {
        try {
            e.preventDefault();

            const serviceData = {
                serviceTitle,
                serviceOldPrice,
                serviceNewPrice,
                serviceDiscount,
                serviceDescription,
                serviceFeatures,
            };

            axios.post(`${url}/service/addservice`, serviceData);

            toast.success("Service Added Successfully...", {
                autoClose: 1500,
            });

            navigate("/servicelist");

            setTimeout(() => {
                window.location.reload();
            }, 2000);

            setSeriviceTitle("");
            setSeriviceOldPrice("");
            setSeriviceNewPrice("");
            setSeriviceDiscount("");
            setSeriviceDescription("");
            setSeriviceFeatures([""]);

        } 
        catch (err) {
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
            toast.error("Failed to Add Service");
        }
    };

    useEffect(() => {
        if (!serviceOldPrice || !serviceNewPrice) {
            setSeriviceDiscount("");
            return;
        }

        const oldP = parseFloat(serviceOldPrice);
        const newP = parseFloat(serviceNewPrice);

        if (oldP > 0 && newP >= 0 && newP <= oldP) {
            const discount = ((oldP - newP) / oldP) * 100;
            setSeriviceDiscount(Math.round(discount) + "%");
        } else {
            setSeriviceDiscount("");
        }
    }, [serviceOldPrice, serviceNewPrice]);

    // Service List

    const [serviceData, setServiceData] = useState([]);

    const fetchServiceData = async () => {
        try {
            const serviceList = await axios.get(`${url}/service/getservice`);
            setServiceData(serviceList.data);
        } catch (err) {
            console.log("Error fetching services:", err.message);
        }
    };

    useEffect(() => {
        fetchServiceData();
    }, []);

    // Service Delete Fun

    const serviceDeleteFun = async (serviceID) => {
        toast.info(
            <div className="flex flex-col gap-3">
                <span className="font-semibold">Are you sure you want to delete?</span>
                <div className="flex gap-2">
                    <button
                        onClick={async () => {
                        try {
                            await axios.delete(`${url}/service/deleteservice/${serviceID}`);
                            toast.success("Service Deleted Successfully...", {
                            autoClose: 1500,
                            });
                            setTimeout(() => {
                            window.location.reload();
                            }, 2000);
                        } 
                        catch (err) {
                            toast.dismiss();
                            toast.error("Failed to Delete Service");
                        }}}
                        className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                        Yes
                    </button>
                    <button onClick={() => toast.dismiss()} className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md">
                        No
                    </button>
                </div>
            </div>,
            { autoClose: false, closeOnClick: false }
        );
    };

    // Service Update

    const [updateServiceTitle, setUpdateServiceTitle] = useState("");
    const [updateServiceOldPrice, setUpdateServiceOldPrice] = useState("");
    const [updateServiceNewPrice, setUpdateServiceNewPrice] = useState("");
    const [updateServiceDiscount, setUpdateServiceDiscount] = useState("");
    const [updateServiceDescription, setUpdateServiceDescription] = useState("");
    const [updateServiceFeatures, setUpdateServiceFeatures] = useState([]);

    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

    const [ updateServiceID, setUpdateServiceID ] = useState('')

    const serviceModalFun = (serviceID) => {
        const service = serviceData.find((a) => a._id === serviceID)

        if (service) {
            setUpdateServiceTitle(service.serviceTitle);
            setUpdateServiceOldPrice(service.serviceOldPrice);
            setUpdateServiceNewPrice(service.serviceNewPrice);
            setUpdateServiceDiscount(service.serviceDiscount);
            setUpdateServiceDescription(service.serviceDescription);
            setUpdateServiceFeatures([...service.serviceFeatures]); 
            setUpdateServiceID(service._id)
        }

        setIsServiceModalOpen(true);
    }

    const serviceUpdateFun = async (e) => {
        try{
            e.preventDefault()

            const updateServiceData = {
                serviceTitle : updateServiceTitle,
                serviceOldPrice : updateServiceOldPrice,
                serviceNewPrice : updateServiceNewPrice,
                serviceDiscount : updateServiceDiscount,
                serviceDescription : updateServiceDescription,
                serviceFeatures : updateServiceFeatures
            }

            await axios.put(`${url}/service/updateservice/${updateServiceID}`, updateServiceData)
            toast.success("Service updated successfully!", { autoClose: 2000 });
            setIsServiceModalOpen(false);

            fetchServiceData();
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
            toast.error("Failed to Update Service");
        }
    }

    useEffect(() => {
        if (!updateServiceOldPrice || !updateServiceNewPrice) {
            setUpdateServiceDiscount("");
            return;
        }
    
        const oldP = parseFloat(updateServiceOldPrice);
        const newP = parseFloat(updateServiceNewPrice);
    
        if (oldP > 0 && newP >= 0 && newP <= oldP) {
            const discount = ((oldP - newP) / oldP) * 100;
            setUpdateServiceDiscount(Math.round(discount) + "%");
        }else {
            setUpdateServiceDiscount("");
        }
    }, [updateServiceOldPrice, updateServiceNewPrice, setUpdateServiceDiscount]);

    // Contact Enquiry List

    const [ contactEnquiryData, setContactEnquiryData ] = useState([])

    const fetchContactEnquiryData = async () => {
        try{
            const contactEnquiryList = await axios.get(`${url}/contactenquiry/getcontactenquiry`)
            setContactEnquiryData(contactEnquiryList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
        }
    }

    useEffect(() => {
        fetchContactEnquiryData()
    }, [])

    // Contact Enquiry Delete

    const deleteContactEnquiryFun = (contactEnquiryID) => {
        toast.info(
            <div className="flex flex-col gap-3">
                <span className="font-semibold">Are you sure you want to delete this Enquiry?</span>
                <div className="flex gap-2">
                    <button
                        onClick={async () => {
                        try {
                            await axios.delete(`${url}/contactenquiry/deletecontactenquiry/${contactEnquiryID}`);
                            toast.success("Contact Enquiry Deleted Successfully...", {
                            autoClose: 1500,
                            });
                            setTimeout(() => {
                            window.location.reload();
                            }, 2000);
                        } 
                        catch (err) {
                            toast.dismiss();
                            toast.error("Failed to Delete Contact Enquiry");
                        }}}
                        className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                        Yes
                    </button>
                    <button onClick={() => toast.dismiss()} className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md">
                        No
                    </button>
                </div>
            </div>,
            { autoClose: false, closeOnClick: false }
        );
    }

    // Contact Enquiry Status

    const updateContactEnquiryStatusFun = async (contactEnquiryID, newStatus) => {
        try {
            await axios.put(`${url}/contactenquiry/updatecontactenquiry/${contactEnquiryID}`, {
                contactEnquiryStatus: newStatus,
            });
            
            setContactEnquiryData((prev) =>
                prev.map((item) =>
                    item._id === contactEnquiryID ? { ...item, contactEnquiryStatus: newStatus } : item
                )
            );
            toast.success("Status updated successfully", { autoClose: 1500 });
        } catch (err) {
            toast.error("Failed to update status");
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
        }
    };

    // Course

    const [ courseName, setCourseName ] = useState("");
    const [ courseDescription, setCourseDescription ] = useState("");
    const [ courseShortDescription, setCourseShortDescription ] = useState("");
    const [ courseTopicsCount, setCourseTopicsCount ] = useState("");
    const [ courseHours, setCourseHours ] = useState("");
    const [ courseAbout, setCourseAbout ] = useState("");
    const [ courseYouLearn, setCourseYouLearn ] = useState([]);

    const [courseImgFile, setCourseImgFile] = useState(null);
    const [courseImgPreview, setCourseImgPreview] = useState(null);

    // Course Add Fun 

    // handle file select
    const handleCourseImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCourseImgFile(file);
            setCourseImgPreview(URL.createObjectURL(file));
        }
    };

    const courseAddFun = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("courseName", courseName);
            formData.append("courseDescription", courseDescription);
            formData.append("courseShortDescription", courseShortDescription);
            formData.append("courseTopicsCount", courseTopicsCount);
            formData.append("courseHours", courseHours);
            formData.append("courseAbout", courseAbout);

            // append array properly
            courseYouLearn.forEach((point) => {
                formData.append("courseYouLearn", point);
            });

            if (courseImgFile) {
                formData.append("courseImage", courseImgFile);
            }

            await axios.post(`${url}/course/addcourse`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Course Added Successfully...",
            {
                autoClose: 1500,
            });
            
            navigate("/courselist");

            setTimeout(() => {
                window.location.reload();
            }, 2000);

            setCourseName("");
            setCourseDescription("");
            setCourseShortDescription("");
            setCourseTopicsCount("");
            setCourseHours("");
            setCourseAbout("");
            setCourseYouLearn([""]); 
            setCourseImgFile(null);
            setCourseImgPreview(null);

        } 
        catch (err) {
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
            toast.error("Failed to Add Course");
        }
    };

    // Add new input field
    const addLearnPoint = () => {
        setCourseYouLearn([...courseYouLearn, ""]);
    };

    // Remove input field
    const removeLearnPoint = (index) => {
        const updated = courseYouLearn.filter((_, i) => i !== index);
        setCourseYouLearn(updated);
    };

    // Update input value
    const updateLearnPoint = (index, value) => {
        const updated = [...courseYouLearn];
        updated[index] = value;
        setCourseYouLearn(updated);
    };

    // Get Courses 

    const [ courseData, setCourseData ] = useState([])

    const fetchCourseData = async () => {
        try{
            const courseList = await axios.get(`${url}/course/getcourse`)
            setCourseData(courseList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
        }
    }

    useEffect(() => {
        fetchCourseData()
    }, [])

    const [expandedCourse, setExpandedCourse] = useState(null);

    const toggleExpand = (id) => {
        setExpandedCourse(expandedCourse === id ? null : id);
    };

    // Course Delete Fun

    const courseDeleteFun = async (courseID) => {
        toast.info(
            <div className="flex flex-col gap-3">
                <span className="font-semibold">Are you sure you want to delete?</span>
                <div className="flex gap-2">
                    <button
                        onClick={async () => {
                        try {
                            await axios.delete(`${url}/course/deletecourse/${courseID}`)
                            toast.success("Course Deleted Successfully...", {
                            autoClose: 1500,
                            });
                            setTimeout(() => {
                            window.location.reload();
                            }, 2000);
                        } 
                        catch (err) {
                            toast.dismiss();
                            toast.error("Failed to Delete Course");
                        }}}
                        className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                        Yes
                    </button>
                    <button onClick={() => toast.dismiss()} className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md">
                        No
                    </button>
                </div>
            </div>,
            { autoClose: false, closeOnClick: false }
        );
    };

    // Course Update 

    const [ updateCourseName, setUpdateCourseName ] = useState("");
    const [ updateCourseDescription, setUpdateCourseDescription ] = useState("");
    const [ updateCourseShortDescription, setUpdateCourseShortDescription ] = useState("");
    const [ updateCourseTopicsCount, setUpdateCourseTopicsCount ] = useState("");
    const [ updateCourseHours, setUpdateCourseHours ] = useState("");
    const [ updateCourseAbout, setUpdateCourseAbout ] = useState("");
    const [ updateCourseYouLearn, setUpdateCourseYouLearn ] = useState([]);
    const [updateCourseImage, setUpdateCourseImage] = useState(null);
    const [updateCourseImagePreview, setUpdateCourseImagePreview] = useState(null);

    const handleUpdateCourseImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUpdateCourseImage(file);
            setUpdateCourseImagePreview(URL.createObjectURL(file));
        }
    };

    const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

    const [ updateCourseID, setUpdateCourseID ] = useState('')

    const courseModelFun = (courseID) => {
        const course = courseData.find((a) => a._id === courseID)

        if (course) {
            setUpdateCourseName(course.courseName);
            setUpdateCourseDescription(course.courseDescription);
            setUpdateCourseShortDescription(course.courseShortDescription);
            setUpdateCourseTopicsCount(course.courseTopicsCount);
            setUpdateCourseHours(course.courseHours);
            setUpdateCourseAbout(course.courseAbout);
            setUpdateCourseYouLearn([...course.courseYouLearn]); 
            setUpdateCourseID(course._id)
        }

        setIsCourseModalOpen(true);
    }

    const courseUpdateFun = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("courseName", updateCourseName);
            formData.append("courseDescription", updateCourseDescription);
            formData.append("courseShortDescription", updateCourseShortDescription);
            formData.append("courseTopicsCount", updateCourseTopicsCount);
            formData.append("courseHours", updateCourseHours);
            formData.append("courseAbout", updateCourseAbout);

            // ✅ Append each "You Will Learn" item separately
            updateCourseYouLearn.forEach((point) => {
                formData.append("courseYouLearn", point);
            });

            if (updateCourseImage) {
                formData.append("courseImage", updateCourseImage);
            }

            await axios.put(
                `${url}/course/updatecourse/${activeCourse._id}`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            toast.success("Course updated successfully");
            setIsCourseModalOpen(false);
            setPreview(null);
            fetchCourseData(); 
        } 
        catch (err) {
            toast.error("Failed to update course");
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
        }
    };

    const [activeCourse, setActiveCourse] = useState(null);
    
    const [preview, setPreview] = useState(null);
    
    useEffect(() => {
        if (isCourseModalOpen && activeCourse?.courseImage) {
          setPreview(`${url}/uploads/${activeCourse.courseImage}`);
        }
        if (!isCourseModalOpen) {
          setPreview(null);
          setUpdateCourseImage(null);
          setActiveCourse(null);
        }
    }, [isCourseModalOpen, activeCourse]);
    
    const openUpdate = (course) => {
        setActiveCourse(course);
        courseModelFun(course._id);
    };

    const myContextValue = {

        url,
        serviceTitle,
        setSeriviceTitle,
        serviceOldPrice,
        setSeriviceOldPrice,
        serviceNewPrice,
        setSeriviceNewPrice,
        serviceDiscount,
        setSeriviceDiscount,
        serviceDescription,
        setSeriviceDescription,

        serviceFeatures,
        addServiceFeature,
        removeServiceFeature,
        updateServiceFeature,

        serviceAddFun,
        serviceData,
        serviceDeleteFun,

        serviceModalFun, 
        isServiceModalOpen, setIsServiceModalOpen,

        updateServiceTitle, setUpdateServiceTitle,
        updateServiceOldPrice, setUpdateServiceOldPrice,
        updateServiceNewPrice, setUpdateServiceNewPrice,
        updateServiceDiscount, setUpdateServiceDiscount,
        updateServiceDescription, setUpdateServiceDescription,
        updateServiceFeatures, setUpdateServiceFeatures,

        serviceUpdateFun,

        contactEnquiryData,
        deleteContactEnquiryFun,
        updateContactEnquiryStatusFun,

        courseData, courseAddFun, handleCourseImgChange,

        courseImgPreview, 
        courseName, setCourseName,
        courseDescription, setCourseDescription,
        courseShortDescription, setCourseShortDescription,
        courseTopicsCount, setCourseTopicsCount,
        courseHours, setCourseHours,
        courseAbout, setCourseAbout,
        courseYouLearn, setCourseYouLearn,

        updateLearnPoint, removeLearnPoint, addLearnPoint,

        isCourseModalOpen, setIsCourseModalOpen,

        updateCourseName, setUpdateCourseName,
        updateCourseDescription, setUpdateCourseDescription,
        updateCourseShortDescription, setUpdateCourseShortDescription,
        updateCourseTopicsCount, setUpdateCourseTopicsCount,
        updateCourseHours, setUpdateCourseHours,
        updateCourseAbout, setUpdateCourseAbout,
        updateCourseYouLearn, setUpdateCourseYouLearn,

        courseModelFun, toggleExpand, expandedCourse,
        openUpdate, courseDeleteFun, courseUpdateFun, handleUpdateCourseImageChange, updateCourseImagePreview, activeCourse, 

    };

    return(
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
    
};

export default MyContextProvider;