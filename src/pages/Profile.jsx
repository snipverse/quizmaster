import { useState } from "react";
import { useUser } from "../hooks/useUser";
import Navbar from "../components/Navbar";

function Profile() {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  const roles = ["Instructor", "Student", "Admin"];

  const handleEdit = () => {
    setIsEditing(true);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Profile Information</h3>
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Edit Profile
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Role:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p><span className="font-medium">Name:</span> {user.name}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">Role:</span> {user.role}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
