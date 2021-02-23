import React from "react";
import KYC from "./KYC";
const NewKYC = (e) => {
  return <KYC />;
};
export default function MultipleShareKYC() {
  return (
    <div>
      <KYC />
      <KYC />
      <KYC />
    </div>
  );
}
