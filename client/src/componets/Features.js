'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";


const Features = () => {
  const [activeTab, setActiveTab] = useState("features-tab-1");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section id="features" className="features section" style={{ padding: "40px 0" }}>
      <div className="container">
        <div className="section-title" data-aos="fade-up" style={{ paddingBottom: "40px" }}>
          <h2>Features</h2>
          <p>Discover the amazing features that make our service stand out.</p>
        </div>

        <div className="tabs-container">
          <ul className="nav-tabs" data-aos="fade-up" data-aos-delay="100" style={{ display: "flex", listStyle: "none", backgroundColor: "white", padding: "10px", borderRadius: "10px", margin: "auto" }}>
            {["Modisit", "Praesenti", "Explica"].map((tab, index) => {
              const tabId = `features-tab-${index + 1}`;
              return (
                <li key={tabId} className="nav-item" >
                  <button
                    className={`nav-link ${activeTab === tabId ? "active" : ""}`}
                    onClick={() => setActiveTab(tabId)}
                    style={{ width: "120px" }}
                  >
                    <h4>{tab}</h4>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {["Voluptatem dignissimos provident", "Neque exercitationem debitis", "Voluptatibus commodi accusamus"].map(
            (title, index) => {
              const tabId = `features-tab-${index + 1}`;
                return (
                <div
                  key={tabId}
                  className={`tab-pane fade`}
                  style={{ display: activeTab === tabId ? "block" : "none" }}
                >
                  <h3>{title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
                </div>
                );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;