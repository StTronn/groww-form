import React, { useState } from "react";
import BankDetail from "./BankDetail";
import PersonalDetail from "./PersonalDetail";
import DetailNav from "./DetailNav.js";
import "./index.css";

export const sections = { personal: "Personal Details", bank: "Bank Details" };

const DetailCointainer = () => {
  const [selectedSection, setSelectedSection] = useState(sections.bank);
  return (
    <div className="cointainerDetails">
      <div className="leftCointainerDetails">
        <div className="fadeInUpDetailsDelay">
          <div className="gridDetails">
            <DetailNav
              setSection={setSelectedSection}
              selected={selectedSection}
              sections={sections}
            />

            {selectedSection === sections.bank && <BankDetail />}
            {selectedSection === sections.personal && <PersonalDetail />}
          </div>
        </div>
      </div>
      {/* this is only for animation */}
      <div className="imgBackgroundDetails"></div>
    </div>
  );
};

export default DetailCointainer;
