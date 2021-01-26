import React from "react";
import {useHistory} from "react-router-dom"

import routes from "../../../router/webRoutes"

const DetailNav = ({ selected, sections, setSection }) => {
  const history = useHistory();
  return (
    <div className="menuWrapperDetails card clrText">
      {Object.values(sections).map((section, i) => (
        <NavElements
          onClick={() => history.push(`${routes.DEFAULT_DETAIL}/${section}`)}
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
