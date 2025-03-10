import React, { useState } from "react";
import Energy_logo from './DWM_Energy_Services.png';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    installer: "",
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    ageBetween18And75: "",
    phone: "",
    email: "",
    callForRateFix: "",
    supplier: "",
    fuelType: "",
    paymentType: "",
    residency: "",
    monthlyGasPayment: "",
    monthlyElectricityPayment: "",
    comments: "",
    smsConsent: false,
    emailConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-10">
      {/* Logo */}
      <div className="text-center mb-6">
        <img src={Energy_logo} alt="DWM Energy Services" className="mx-auto w-32" />
      </div>

      <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
      Eco Lead Generation Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Installer Details */}
        <label className="block">
          <span className="text-gray-700 font-medium">Installer Name</span>
          <select
            name="installer"
            value={formData.installer}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">Select Installer</option>
            <option value="Installer One">Installer One</option>
            <option value="Installer Two">Installer Two</option>
            <option value="Installer Three">Installer Three</option>
          </select>
        </label>

        {/* Customer Details */}
        <label className="block">
          <span className="text-gray-700 font-medium">Title</span>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
        </label>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <div className="flex items-center justify-between">
  <span className="text-gray-700 font-medium">Are you between the ages of 18 and 75?</span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      name="ageBetween18And75"
      checked={formData.ageBetween18And75}
      onChange={(e) =>
        setFormData({ ...formData, ageBetween18And75: e.target.checked })
      }
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-lime-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-400"></div>
    <span className="ml-3 text-gray-900">{formData.ageBetween18And75 ? "Yes" : "No"}</span>
  </label>
</div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        {/* Energy Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
  <span className="text-gray-700 sm:w-3/4 font-medium">
    We work with a range of gas and electricity partners; would you be interested in a call to fix your rate & protect you from future rises?
  </span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      name="callForRateFix"
      checked={formData.callForRateFix}
      onChange={(e) =>
        setFormData({ ...formData, callForRateFix: e.target.checked })
      }
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-lime-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-400"></div>
    <span className="ml-4 text-gray-900">
      {formData.callForRateFix ? "Yes" : "No"}
    </span>
  </label>
</div>

<div className="mb-4">
  <label htmlFor="supplier" className="block text-gray-700 font-medium mb-2">
    Who is your current supplier?
  </label>
  <select
    id="supplier"
    name="supplier"
    value={formData.supplier}
    onChange={(e) => {
      setFormData({ ...formData, supplier: e.target.value });
    }}
    className="w-full p-2 border rounded-lg"
  >
    <option value="" disabled>Select</option>
    <option value="E.ON Next">E.ON Next</option>
    <option value="E.ON">E.ON</option>
    <option value="EDF">EDF</option>
    <option value="British Gas">British Gas</option>
    <option value="Octopus">Octopus</option>
    <option value="OVO">OVO</option>
    <option value="Scottish Power">Scottish Power</option>
    <option value="Good Energy">Good Energy</option>
    <option value="Ecotricity">Ecotricity</option>
    <option value="Utilita">Utilita</option>
    <option value="So Energy">So Energy</option>
    <option value="E Gas & Power">E Gas & Power</option>
    <option value="Outfox the Market">Outfox the Market</option>
    <option value="Rebel Energy">Rebel Energy</option>
    <option value="Fuse">Fuse</option>
    <option value="Jellyfish">Jellyfish</option>
    <option value="Boost">Boost</option>
    <option value="Utility Warehouse">Utility Warehouse</option>
    <option value="Other">Other</option>
  </select>

  {/* Show input field when "Other" is selected */}
  {formData.supplier === "Other" && (
    <input
      type="text"
      name="otherSupplier"
      placeholder="Please specify your supplier"
      value={formData.otherSupplier || ""}
      onChange={(e) =>
        setFormData({ ...formData, otherSupplier: e.target.value })
      }
      className="w-full p-2 mt-2 border rounded-lg"
    />
  )}
</div>

<div className="mb-4">
  <label htmlFor="fuelType" className="block text-gray-700 font-medium mb-2">
    Dual or Single Fuel?
  </label>
  <select
    id="fuelType"
    name="fuelType"
    value={formData.fuelType}
    onChange={handleChange}
    className="w-full p-2 border rounded-lg"
  >
    <option value="" disabled>Select</option>
    <option value="Dual Fuel">Dual Fuel</option>
    <option value="Single Fuel">Single Fuel</option>
  </select>
</div>

<div className="mb-4">
  <label htmlFor="paymentType" className="block text-gray-700 font-medium mb-2">
    Payment Type
  </label>
  <select
    id="paymentType"
    name="paymentType"
    value={formData.paymentType}
    onChange={handleChange}
    className="w-full p-2 border rounded-lg"
  >
    <option value="" disabled>Select</option>
    <option value="Direct debit">Direct debit</option>
    <option value="Prepayment">Prepayment</option>
    <option value="Smart prePayment">Smart prePayment</option>
    <option value="Pay on Receipt of Bill">Pay on Receipt of Bill</option>
  </select>
</div>

<div className="mb-4">
  <label htmlFor="residency" className="block text-gray-700 font-medium mb-2">
    Are you a Homeowner or Tenant?
  </label>
  <select
    id="residency"
    name="residency"
    value={formData.residency}
    onChange={handleChange}
    className="w-full p-2 border rounded-lg"
  >
    <option value="" disabled>Select</option>
    <option value="Homeowner">Homeowner</option>
    <option value="Tenant">Tenant</option>
  </select>
</div>

<input
  type="text"
  name="monthlyGasPayment"
  placeholder="Monthly Gas Payment (£)"
  value={formData.monthlyGasPayment}
  onChange={handleChange}
  className="w-full p-2 border rounded-lg"
/>

<input
  type="text"
  name="monthlyElectricityPayment"
  placeholder="Monthly Electricity Payment (£)"
  value={formData.monthlyElectricityPayment}
  onChange={handleChange}
  className="w-full p-2 border rounded-lg"
/>


<div className="mb-4">
  <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
    Comments (Optional)
  </label>
  <textarea
    id="comments"
    name="comments"
    value={formData.comments}
    onChange={handleChange}
    placeholder="Enter any additional details..."
    className="w-full p-2 border rounded-lg resize-none"
    rows="4"
  />
</div>


        {/* Marketing Preferences */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="smsConsent"
            checked={formData.smsConsent}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <span>I am happy to receive an SMS from DWM.</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="emailConsent"
            checked={formData.emailConsent}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <span>I am happy to receive an email from DWM.</span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-lime-400 text-white py-3 rounded-lg hover:bg-lime-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
