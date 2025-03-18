'use client';

import React, { useState } from 'react';
import "../../css/complaint.css";

const ComplaintForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    email: '',
    phone: '',
    title: '',
    description: '',
    category: '',
    tag: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <div className={`complaintFormOverlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="complaintFormContainer" onClick={e => e.stopPropagation()}>
        <div className="form-header">
          <h2>Submit New Complaint</h2>
          <p>Please fill in the details below</p>
        </div>
        
        <form onSubmit={handleSubmit} className="complaint-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="regNo">Registration Number</label>
              <input
                type="text"
                id="regNo"
                value={formData.regNo}
                onChange={(e) => setFormData({...formData, regNo: e.target.value})}
                placeholder="Enter registration number"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
              >
                <option value="">Select Category</option>
                <option value="academic">Academic Issues</option>
                <option value="infrastructure">Infrastructure Problems</option>
                <option value="administrative">Administrative Concerns</option>
                <option value="faculty">Faculty Related</option>
                <option value="other">Other Issues</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tag">Tag</label>
              <select
                id="tag"
                value={formData.tag}
                onChange={(e) => setFormData({...formData, tag: e.target.value})}
                required
              >
                <option value="">Select Tag</option>
                <option value="hostel">Hostel</option>
                <option value="classroom">Classroom</option>
                <option value="transport">Transport</option>
                <option value="canteen">Canteen</option>
                <option value="library">Library</option>
                <option value="laboratory">Laboratory</option>
                <option value="sports">Sports</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title">Complaint Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="Brief title of your complaint"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Provide detailed information about your complaint..."
              rows="5"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;