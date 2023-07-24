import React from "react";

export default function RequestCard() {
  return (
    <div className="border rounded p-2 ml-24 text-xs">
      <div className="border-b pb-3">
        <h3 className="mb-4 font-semibold">Book request</h3>
        <h4 className="font-semibold text-blue-400">Ottawa to Toronto</h4>
        <p className="text-gray-500">Wednesday, July 26 at 12:15am</p>
      </div>
      <div className="py-3">
        <p>1 seat</p>
        <p>$45</p>
        <p>Pay in person</p>
      </div>
      <button className="rounded-full w-full bg-orange-400 p-2 text-white">
        Request to book
      </button>
    </div>
  );
}
