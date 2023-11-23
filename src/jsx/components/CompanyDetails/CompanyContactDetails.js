import React, { Fragment, useState } from "react";
import EditContactDetails from "./EditContactDetails";
import { Button as RBButton } from "react-bootstrap";

const CompanyContactDetails = () => {
  const [contactModalVisible, setContactModalVisible] = useState(false);

  const styleTitle = {
    fontWeight: "600",
    color: "#2a132e",
    fontSize: "16px",
    letterSpacing: "1px",
  };

  const styleValues = {
    fontWeight: "400",
    color: "grey",
    fontSize: "15px",
    letterSpacing: "1px",
  };

  const addContactPopup = () => {
    console.log("VIEW TRUE");
    setContactModalVisible(true);
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Contact Details</h4>
          <RBButton
            variant="primary"
            style={{ float: "right" }}
            onClick={addContactPopup}
          >
            Add Contact
          </RBButton>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Job Title:
            </div>
            <div className="col-lg-8" style={styleValues}>
              Computer Eng.
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Name:
            </div>
            <div className="col-lg-8" style={styleValues}>
              Test
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Email:
            </div>
            <div className="col-lg-8" style={styleValues}>
              Test@test.com
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Telephone 1:
            </div>
            <div className="col-lg-8" style={styleValues}>
              9234567890
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Telephone 2:
            </div>
            <div className="col-lg-8" style={styleValues}>
              9876543210
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Telephone 3:
            </div>
            <div className="col-lg-8" style={styleValues}>
              9999900000
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Is Primary:
            </div>
            <div className="col-lg-8" style={styleValues}>
              Yes
            </div>
          </div>
        </div>
      </div>
      <EditContactDetails
        isModalVisible={contactModalVisible}
        setModalState={setContactModalVisible}
        // callBack={handleGroupCreation}
        modalTitle={"Edit Bank"}
      />
    </Fragment>
  );
};

export default CompanyContactDetails;
