import React from "react";

const DetailNav = ({ selected, sections, setSection }) => {
  return (
    <div className="menuWrapperDetails card clrText">
      {Object.values(sections).map((section, i) => (
        <NavElements
          onClick={() => setSection(section)}
          selected={selected}
          section={section}
          key={i}
        />
      ))}
    </div>
  );
};

const NavElements = ({ selected, section, onClick }) => {
  const className = calculateClass(selected === section);
  return (
    <div onClick={onClick} className={className}>
      {section}
    </div>
  );
};

const calculateClass = (select) => {
  const selectedClass = "menuItemSelectedDetails";
  const baseClassName = "menuItemDetails";
  const appliedClassName = select
    ? `${baseClassName} ${selectedClass}`
    : `${baseClassName}`;
  return appliedClassName;
};

export default DetailNav;
