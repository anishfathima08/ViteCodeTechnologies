import React, { useContext } from "react";
import { myContext } from "../Context/MyContextProvider";

const AddService = () => {
  const {
    serviceTitle, setSeriviceTitle,
    serviceOldPrice, setSeriviceOldPrice,
    serviceNewPrice, setSeriviceNewPrice,
    serviceDiscount, setSeriviceDiscount,
    serviceDescription, setSeriviceDescription,
    serviceFeatures, addServiceFeature, removeServiceFeature, updateServiceFeature,
    serviceAddFun
  } = useContext(myContext);

  return (
    <div className="max-w-2xl p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-5">Add New Service</h2>
      <form onSubmit={serviceAddFun} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block font-medium">Service Title</label>
          <input
            type="text"
            value={serviceTitle}
            onChange={(e) => setSeriviceTitle(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Prices */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Old Price</label>
            <input
              type="number"
              value={serviceOldPrice}
              onChange={(e) => setSeriviceOldPrice(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block font-medium">New Price</label>
            <input
              type="number"
              value={serviceNewPrice}
              onChange={(e) => setSeriviceNewPrice(e.target.value)}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          {/* Discount */}
          <div>
          <label className="block font-medium">Discount (%)</label>
          <input
            type="text"
            value={serviceDiscount}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 cursor-not-allowed"
          />
        </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={serviceDescription}
            onChange={(e) => setSeriviceDescription(e.target.value)}
            className="w-full border rounded-lg p-2"
            rows="3"
            required
          />
        </div>

        {/* Features */}
        <div>
          <label className="block font-medium">Features</label>
          {serviceFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => updateServiceFeature(index, e.target.value)}
                className="w-full border rounded-lg p-2"
                required
              />
              {serviceFeatures.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeServiceFeature(index)}
                  className="cursor-pointer bg-red-500 text-white px-2 py-1 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addServiceFeature}
            className="cursor-pointer mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            + Add Feature
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-lg font-semibold"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddService;
