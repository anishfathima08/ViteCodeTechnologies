import React, { useContext } from "react";
import { myContext } from "../Context/MyContextProvider";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

const ContactEnquiryList = () => {
  const { contactEnquiryData, deleteContactEnquiryFun, updateContactEnquiryStatusFun } = useContext(myContext);

  return (
    <div className="p-3">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Form Enquiry</h2>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-left">
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Number</th>
              <th className="p-4 font-semibold">Message</th>
              <th className="p-4 font-semibold">Interest</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {
              contactEnquiryData.length === 0
              ? 
                <tr>
                  <td colSpan={6} className="p-5 text-red-600 font-bold text-danger text-center">No Enquires Found</td>
                </tr>
              :
              contactEnquiryData.map((value, index) => (
                <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                  <td className="p-4 font-bold text-gray-800">{value.contactEnquiryName}</td>
                  <td className="p-4 font-bold text-gray-800">{value.contactEnquiryNumber}</td>
                  <td className="p-4 font-bold text-gray-800">{value.contactEnquiryMessage}</td>
                  <td className="p-4">
                    <ul className="space-y-1">
                      {value.contactEnquiryInterests.map((value, index) => (
                        <li key={index} className="flex items-center font-bold gap-2 text-gray-800">
                          <FaCheckCircle className="text-green-500" />
                          {value}
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {/* Bullet point */}
                      <span
                        className={`text-lg font-bold p-2 rounded-full ${
                          value.contactEnquiryStatus === "Pending"
                              ? "bg-yellow-500"
                              : value.contactEnquiryStatus === "Hold"
                              ? "bg-orange-500"
                              : value.contactEnquiryStatus === "Success"
                              ? "bg-green-500"
                              : value.contactEnquiryStatus === "Not Interested"
                              ? "bg-red-500"
                              : value.contactEnquiryStatus === "In Progress"
                              ? "bg-blue-500"
                              : "bg-gray-400"
                        }`}>
                      </span>

                      {/* Dropdown */}
                      <select
                          value={value.contactEnquiryStatus || "Pending"}
                          onChange={(e) => updateContactEnquiryStatusFun(value._id, e.target.value)}
                          className="px-3 py-1 text-sm font-medium rounded-md border cursor-pointer">
                          <option value="Pending">Pending</option>
                          <option value="Hold">Hold</option>
                          <option value="Success">Success</option>
                          <option value="Not Interested">Not Interested</option>
                          <option value="In Progress">In Progress</option>
                      </select>
                    </div>
                  </td>

                  {/* Delete */}
                  <td className="p-3 text-center">
                    <button className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-md" onClick={() => deleteContactEnquiryFun(value._id)}>
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactEnquiryList;
