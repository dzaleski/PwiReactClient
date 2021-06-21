import React from "react";
import BForm from "./form.jsx";

function SummaryForm({ onSubmit }) {
  const fields = [
    {
      fieldName: "firstName",
      label: "First name",
      placeholder: "e.g. John",
      validation: {
        required: true,
      },
    },
    {
      fieldName: "lastName",
      label: "Last Name",
      placeholder: "e.g. Doe",
      validation: {
        required: true,
      },
    },
    {
      fieldName: "city",
      label: "City",
      placeholder: "e.g. Pomnika 13",
      validation: {
        required: true,
      },
    },

    {
      fieldName: "zipCode",
      label: "Zip code",
      placeholder: "e.g. 05-120",
      validation: {
        required: true,
        pattern: {
          value: /[0-9]{2}-[0-9]{3}$/,
          message: "Invalid zip code!",
        },
      },
    },
    {
      fieldName: "address",
      label: "Address",
      placeholder: "e.g. Legionowo",
      validation: {
        required: true,
      },
    },
    {
      fieldName: "country",
      label: "Country",
      placeholder: "Your country",
      validation: {
        required: true,
      },
      type: "select",
      options: [
        { id: 1, value: "poland", selectName: "Poland" },
        { id: 2, value: "greece", selectName: "Greece" },
        { id: 3, value: "italy", selectName: "Italy" },
        { id: 4, value: "roma", selectName: "Roma" },
        { id: 5, value: "ukraine", selectName: "Ukraine" },
      ],
    },
  ];

  return <BForm submit={onSubmit} fields={fields} btnText="confirm" />;
}

export default SummaryForm;
