import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const myContext = createContext()

const MyContextProvider = ({children}) => {

    const navigate = useNavigate()

    const url = 'https://vitecodetechnologies-backend.onrender.com'

    // Service Data Fetching

    const [ serviceData, setServiceData ] = useState([])
    
    const fetchServiceData = async () => {
        try{
            const serviceList = await axios.get(`${url}/service/getservice`)
            setServiceData(serviceList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }
    
    useEffect(() => {
        fetchServiceData()
    }, [])

    // Contact Enquiry 

    const [contactEnquiryName, setContactEnquiryName] = useState("");
    const [contactEnquiryNumber, setContactEnquiryNumber] = useState("");
    const [contactEnquiryMessage, setContactEnquiryMessage] = useState("");
    const [selectedContactInterests, setSelectedContactInterests] = useState([]);

    const contactInterestsList = [
        "Project",
        "Course",
        "Internship"
    ];

    const [contactEnquirySubmitted, setcontactEnquirySubmitted] = useState(false);
    
    const toggleInterest = (interest) => {
        setSelectedContactInterests((prev) =>
        prev.includes(interest)
            ? prev.filter((i) => i !== interest)
            : [...prev, interest]
        );
    };

    const contactEnquirySubmitForm = async (e) => {
        e.preventDefault();
        setcontactEnquirySubmitted(true);

        if (
            !contactEnquiryName ||
            contactEnquiryNumber.length !== 10 ||
            !contactEnquiryMessage ||
            selectedContactInterests.length === 0
        ) {
            return;
        }

        try {
            const contactEnquiryData = {
                contactEnquiryName,
                contactEnquiryNumber,
                contactEnquiryMessage,
                contactEnquiryInterests: selectedContactInterests,
            };

            await axios.post(`${url}/contactenquiry/addcontactenquiry`, contactEnquiryData);

            setContactEnquiryName("");
            setContactEnquiryNumber("");
            setContactEnquiryMessage("");
            setSelectedContactInterests([]);
            setcontactEnquirySubmitted(false);

            toast.success('Form Submitted Successfully...')

        } 
        catch (err) {
            toast.error('Failed to Submit Form...')
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    };

    // Course Data 

    const [ courseData, setCourseData ] = useState([])

    const fetchCourseData = async () => {
        try{
            const courseList = await axios.get(`${url}/course/getcourse`)
            setCourseData(courseList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        fetchCourseData()
    }, [])

    const myContextValue = {

        navigate, 

        url,

        serviceData,

        contactEnquiryName, setContactEnquiryName, 
        contactEnquiryNumber, setContactEnquiryNumber, 
        contactEnquiryMessage, setContactEnquiryMessage, 

        selectedContactInterests, contactInterestsList, 
        contactEnquirySubmitted, toggleInterest, 
        contactEnquirySubmitForm,

        courseData
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default MyContextProvider