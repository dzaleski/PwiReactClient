import React from "react";
import SummaryForm from "../components/summaryForm";
import SummaryItem from "../components/summaryItem";

function SummaryPage() {
  return (
    <div class="w-full md:w-1/2 mx-auto">
      <h4 class="text-3xl text-gray-700 mb-5">Order Summary</h4>
      <div class="p-5 rounded shadow-lg bg-white">
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
      </div>
      <div className="w-full">
        <SummaryForm className="max-w-full" />
      </div>
    </div>
  );
}

export default SummaryPage;
