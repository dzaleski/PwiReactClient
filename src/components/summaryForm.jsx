import React from "react";
import BForm from "./form.jsx";

function SummaryForm({ onSubmit }) {
  const fields = [
    {
      fieldName: "address",
      label: "address",
      placeholder: "street Jaranie",
      validation: {
        required: true,
      },
    },
  ];

  return <BForm submit={onSubmit} fields={fields} btnText="Confirm" />;
}

export default SummaryForm;
