import React, { useState } from "react";
import SEO from "../components/SEO";

const Login = () => {
  const [userType, setUserType] = useState("");

  return (
    <>
      <SEO
        path="/login"
        noindex
        title="Staff & Patient Login | Dr. Preeti's Bright Eye Care"
        description="Secure login for hospital staff and registered patients at Dr. Preeti's Bright Eye Care, Pathankot."
        keywords="hospital login, staff portal, patient login"
      />
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed py-40 min-h-screen pb-6 ">
      <div className="max-w-xl mx-auto p-10 bg-white rounded-3xl shadow-2xl">
        <h1 className="text-2xl font-bold text-teal-800 text-center mb-6">
          Access your account with your login information
        </h1>

        <form className="space-y-6">
          {/* User Type Dropdown */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Please select user type
            </label>
            <select
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">-- Select User Type --</option>
              <option value="admin">Admin User</option>
              <option value="hr">HR Login</option>
              <option value="doctor">Doctor Login</option>
              <option value="staff">Hospital Staff Login</option>
              <option value="patient">Patient Login</option>
            </select>
          </div>

          {/* Admin Extra Field */}
          {userType === "admin" && (
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Employee ID
              </label>
              <input
                type="text"
                placeholder="Enter your Employee ID"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                required
              />
            </div>
          )}

          {/* Hospital Staff Dropdown */}
          {userType === "staff" && (
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Select Your Department Role
              </label>
              <select
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                required
              >
                <option value="">-- Select Role --</option>
                <option value="receptionist">Receptionist</option>
                <option value="laboratory">Laboratory</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="store">Store Department</option>
                <option value="nurse">Nurse</option>
                <option value="cash">Cash Counter</option>
              </select>
            </div>
          )}

          {/* Doctor Extra Field */}
          {userType === "doctor" && (
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Registered Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number for security"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                required
              />
            </div>
          )}

          {/* Username */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Sign In
          </button>

          {/* Notice */}
          <p className="text-sm text-red-600 text-center mt-4">
            ⚠️ Please enter your credentials carefully. You have only 3
            attempts. After that, contact the concerned department to reactivate
            your account.
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
