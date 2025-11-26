import React, { useContext } from "react";
import { myContext } from "../Context/MyContextProvider";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const ServiceList = () => {
  const {
    serviceData,
    serviceDeleteFun,
    serviceModalFun,
    isServiceModalOpen,
    setIsServiceModalOpen,
    updateServiceTitle,
    setUpdateServiceTitle,
    updateServiceOldPrice,
    setUpdateServiceOldPrice,
    updateServiceNewPrice,
    setUpdateServiceNewPrice,
    updateServiceDiscount,
    setUpdateServiceDiscount,
    updateServiceDescription,
    setUpdateServiceDescription,
    updateServiceFeatures,
    setUpdateServiceFeatures,
    serviceUpdateFun,
  } = useContext(myContext);

  return (
    <div className="p-3">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Services</h2>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-left">
              <th className="p-4 font-semibold">Service</th>
              <th className="p-4 font-semibold">Old Price</th>
              <th className="p-4 font-semibold">New Price</th>
              <th className="p-4 font-semibold">Discount</th>
              <th className="p-4 font-semibold">Description</th>
              <th className="p-4 font-semibold">Features</th>
              <th className="p-4 font-semibold">Update</th>
              <th className="p-4 font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {
              serviceData.length === 0
              ? 
                <tr>
                  <td colSpan={8} className="p-5 text-red-600 font-bold text-danger text-center" >No Service Found</td>
                </tr>
              :
              serviceData.map((value, index) => (
                <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                  <td className="p-3 font-medium text-gray-800">{value.serviceTitle}</td>
                  <td className="p-3 line-through text-gray-800">₹ {value.serviceOldPrice}</td>
                  <td className="p-3 font-bold text-green-600">₹ {value.serviceNewPrice}</td>
                  <td className="p-3 text-red-500">{value.serviceDiscount}</td>
                  <td className="p-3 text-gray-800">{value.serviceDescription}</td>
                  <td className="p-3">
                    <ul className="space-y-1">
                      {value.serviceFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-800">
                          <FaCheckCircle className="text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 text-center">
                    <button onClick={() => serviceModalFun(value._id)} className="cursor-pointer flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md shadow-md">
                      <FaEdit /> Update
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button onClick={() => serviceDeleteFun(value._id)} className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-md">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isServiceModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center bg-gray-50 bg-opacity-50
                    transition-opacity duration-300 ${isServiceModalOpen ? "opacity-100" : "opacity-0"}`}>
          <div
            className={`bg-white rounded-lg shadow-xl w-full max-w-5xl transform transition-all duration-300
                            ${isServiceModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Update Service</h3>
              <button onClick={() => setIsServiceModalOpen(false)} className="cursor-pointer font-bold text-2xl text-black-400 hover:text-gray-900">
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={serviceUpdateFun} className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium">Service Title</label>
                    <input type="text" value={updateServiceTitle} onChange={(e) => setUpdateServiceTitle(e.target.value)} className="w-full border rounded-lg p-2" required />
                  </div>

                  <div>
                    <label className="block font-medium">Old Price</label>
                    <input type="number" value={updateServiceOldPrice} onChange={(e) => setUpdateServiceOldPrice(e.target.value)} className="w-full border rounded-lg p-2" />
                  </div>

                  <div>
                    <label className="block font-medium">New Price</label>
                    <input type="number" value={updateServiceNewPrice} onChange={(e) => setUpdateServiceNewPrice(e.target.value)} className="w-full border rounded-lg p-2" required />
                  </div>

                  <div>
                    <label className="block font-medium">Discount</label>
                    <input type="text" value={updateServiceDiscount} readOnly onChange={(e) => setUpdateServiceDiscount(e.target.value)} className="cursor-not-allowed w-full border rounded-lg p-2" />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium">Description</label>
                    <textarea value={updateServiceDescription} onChange={(e) => setUpdateServiceDescription(e.target.value)} className="w-full border rounded-lg p-2" rows="3" required />
                  </div>

                  <div>
                    <label className="block font-medium">Features</label>
                    {updateServiceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...updateServiceFeatures];
                            newFeatures[index] = e.target.value;
                            setUpdateServiceFeatures(newFeatures);
                          }}
                          className="w-full border rounded-lg p-2"
                          required
                        />
                        {updateServiceFeatures.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setUpdateServiceFeatures(updateServiceFeatures.filter((_, i) => i !== index))}
                            className="cursor-pointer bg-red-500 font-bold text-white px-2 py-1 rounded">
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={() => setUpdateServiceFeatures([...updateServiceFeatures, ""])} className="cursor-pointer mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                      + Add Feature
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="col-span-2 flex justify-end gap-3">
                  <button type="submit" className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Update Service
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
