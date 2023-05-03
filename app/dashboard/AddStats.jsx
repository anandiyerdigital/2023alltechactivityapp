"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddStats = () => {
  const [date, setDate] = useState("");
  const [miles, setMiles] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    const data = {
      date,
      miles,
      totalTime,
      notes,
    };

    console.log(data);
    setIsLoading(true);

    try {
      await axios.post("/api/rundata", data);
      toast.success("Your activity data has been added successfully!");
    } catch (error) {
      toast.error("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="flex items-center justify-center p-5 m-5">
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Add Run/Walk Activity</h2>

      <div className="space-y-2 items-center justify-center">
        <div>
          <label htmlFor="date" className="block text-sm font-medium">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 mt-1 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="miles" className="block text-sm font-medium">
            Miles:
          </label>
          <input
            type="number"
            id="miles"
            value={miles}
            onChange={(e) => setMiles(e.target.value)}
            step="0.01"
            min="0"
            required
            className="w-full border border-gray-300 p-2 mt-1 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="totalTime" className="block text-sm font-medium">
            Total Time (Minutes):
          </label>
          <input
            type="number"
            id="totalTime"
            value={totalTime}
            onChange={(e) => setTotalTime(e.target.value)}
            step="1"
            min="0"
            required
            className="w-full border border-gray-300 p-2 mt-1 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="totalTime" className="block text-sm font-medium">
            Notes(Optional):
          </label>
          <input
            type="text"
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-gray-300 p-2 mt-1 rounded-md"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-amber-700 text-white font-bold py-2 px-4 mt-4 rounded-md transition duration-150 ease-in-out hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  </div>
    
  );
};

export default AddStats;
