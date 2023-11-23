import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          <strong>Power House CRM Dashboard</strong> © {d.getFullYear()} All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
