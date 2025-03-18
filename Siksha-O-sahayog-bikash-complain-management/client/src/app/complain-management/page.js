"use client";

import React, { useState } from "react";
import ComplaintForm from "./complaint-form";
import { CheckCircle, AlertTriangle, PlusCircle, ChevronLeft, ChevronRight, Clock, Search, Tag, X } from "lucide-react";
import "../../css/complaint.css";

const ComplaintPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const complaintsPerPage = 10;

  const tags = [
    "hostel",
    "classroom",
    "transport",
    "canteen",
    "library",
    "laboratory",
    "sports",
    "other"
  ];

  const complaints = [
    { id: 1, title: "Internet Connectivity Issue", description: "The WiFi in Block A has been down since yesterday evening. Students are unable to access study materials.", status: "pending", date: "2024-02-15", category: "infrastructure", tag: "classroom" },
    { id: 2, title: "Library AC Not Working", description: "The air conditioning in the main library is not functioning properly, making it uncomfortable for students.", status: "resolved", date: "2024-02-14", category: "infrastructure", tag: "library" },
    { id: 3, title: "Food Quality Issue", description: "The hostel food quality has deteriorated recently. Many students have reported stomach issues.", status: "resolved", date: "2024-02-13", category: "administrative", tag: "canteen" },
    { id: 4, title: "Classroom Projector Malfunction", description: "Projector in Room 101 is not working. Teachers are facing difficulty in delivering lectures.", status: "resolved", date: "2024-02-12", category: "academic", tag: "classroom" },
    { id: 5, title: "Unclean Washrooms", description: "The washrooms in Block C are not being cleaned regularly. It is unhygienic.", status: "resolved", date: "2024-02-11", category: "infrastructure", tag: "hostel" },
    { id: 6, title: "Bus Service Delays", description: "The morning shuttle is always late by 20 minutes, causing students to miss morning lectures.", status: "resolved", date: "2024-02-10", category: "administrative", tag: "transport" },
    { id: 7, title: "Broken Chairs in Lecture Hall", description: "Many chairs in the main lecture hall are broken, making it difficult to sit comfortably.", status: "resolved", date: "2024-02-09", category: "infrastructure", tag: "classroom" },
    { id: 8, title: "Hostel Water Shortage", description: "There has been no running water in the hostel bathrooms since last night.", status: "resolved", date: "2024-02-08", category: "infrastructure", tag: "hostel" },
    { id: 9, title: "Late Night Noise Issue", description: "Some students play loud music at night, disturbing others in the hostel.", status: "resolved", date: "2024-02-07", category: "administrative", tag: "hostel" },
    { id: 10, title: "Mess Timing Problem", description: "The mess is closing earlier than scheduled, causing inconvenience to students.", status: "pending", date: "2024-02-06", category: "administrative", tag: "canteen" },
    { id: 11, title: "Lab Equipment Not Working", description: "Several lab computers are not functioning properly, affecting practical sessions.", status: "pending", date: "2024-02-05", category: "academic", tag: "laboratory" },
    { id: 12, title: "No Streetlights Near Campus Gate", description: "The streetlights near the campus gate are not working, making it unsafe at night.", status: "pending", date: "2024-02-04", category: "infrastructure", tag: "other" },
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredComplaints = complaints.filter(complaint =>
    (searchQuery === "" || 
     complaint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     complaint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     complaint.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTags.length === 0 || selectedTags.includes(complaint.tag))
  );

  const totalComplaints = filteredComplaints.length;
  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = filteredComplaints.slice(indexOfFirstComplaint, indexOfLastComplaint);

  const nextPage = () => {
    if (indexOfLastComplaint < totalComplaints) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      infrastructure: "#3b82f6",
      academic: "#8b5cf6",
      administrative: "#f59e0b",
      faculty: "#10b981"
    };
    return colors[category] || "#6b7280";
  };

  const getTagColor = (tag) => {
    const colors = {
      hostel: "#ef4444",
      classroom: "#8b5cf6",
      transport: "#f59e0b",
      canteen: "#10b981",
      library: "#3b82f6",
      laboratory: "#6366f1",
      sports: "#ec4899",
      other: "#6b7280"
    };
    return colors[tag] || "#6b7280";
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="complaint-container">
      <div className="complaint-summary">
        <div className="summary-item pending">
          <AlertTriangle size={20} />
          <div className="summary-info">
            <span className="summary-count">{complaints.filter(c => c.status === "pending").length}</span>
            <span className="summary-label">Pending</span>
          </div>
        </div>
        <div className="summary-item resolved">
          <CheckCircle size={20} />
          <div className="summary-info">
            <span className="summary-count">{complaints.filter(c => c.status === "resolved").length}</span>
            <span className="summary-label">Resolved</span>
          </div>
        </div>
        <div className="summary-item total">
          <Clock size={20} />
          <div className="summary-info">
            <span className="summary-count">{complaints.length}</span>
            <span className="summary-label">Total</span>
          </div>
        </div>
      </div>

      <button className="create-complaint" onClick={() => setIsFormOpen(true)}>
        <PlusCircle size={20} /> New Complaint
      </button>

      <div className="filter-section">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search complaints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="tags-filter">
          <div className="tags-header">
            <Tag size={16} />
            <span>Filter by Tags</span>
          </div>
          <div className="tags-list">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
                style={{
                  '--tag-color': getTagColor(tag),
                  backgroundColor: selectedTags.includes(tag) ? getTagColor(tag) : 'transparent',
                  color: selectedTags.includes(tag) ? 'white' : getTagColor(tag),
                  borderColor: getTagColor(tag)
                }}
              >
                {tag}
                {selectedTags.includes(tag) && <X size={14} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="complaints-list">
        {currentComplaints.map((complaint) => (
          <div key={complaint.id} className={`complaint-item ${complaint.status}`}>
            <div className="complaint-content">
              <div className="complaint-header">
                <h3>{complaint.title}</h3>
                <div className="complaint-meta">
                  <span className="complaint-date">
                    <Clock size={14} />
                    {formatDate(complaint.date)}
                  </span>
                  <span 
                    className="complaint-category"
                    style={{ backgroundColor: getCategoryColor(complaint.category) }}
                  >
                    {complaint.category}
                  </span>
                  <span 
                    className="complaint-tag"
                    style={{ backgroundColor: getTagColor(complaint.tag) }}
                  >
                    {complaint.tag}
                  </span>
                </div>
              </div>
              <p className="complaint-description">{complaint.description}</p>
            </div>
            <div className={`status-tag ${complaint.status}`}>
              {complaint.status === "pending" ? (
                <><AlertTriangle size={16} /> Pending</>
              ) : (
                <><CheckCircle size={16} /> Resolved</>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">
          <ChevronLeft size={20} /> Previous
        </button>
        <span className="page-number">Page {currentPage}</span>
        <button onClick={nextPage} disabled={indexOfLastComplaint >= totalComplaints} className="pagination-btn">
          Next <ChevronRight size={20} />
        </button>
      </div>

      <ComplaintForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default ComplaintPage;
