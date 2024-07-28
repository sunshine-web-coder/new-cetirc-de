"use client"

import React, { useState } from "react";
import { tabs } from "./TabsConfig";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 text-white">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`p-4 cursor-pointer ${
                activeTab === index ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">{tabs[activeTab].component}</div>
    </div>
  );
}
