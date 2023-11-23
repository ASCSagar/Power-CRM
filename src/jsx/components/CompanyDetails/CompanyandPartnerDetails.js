import React, { Fragment, useState } from "react";
import { Button as RBButton } from "react-bootstrap";
import EditCompanyDetails from "./EditCompanyDetails";
import EditBankDetails from "./EditBankDetails";

const CompanyandPartnerDetails = () => {
  const [bankModalVisible, setBankModalVisible] = useState(false);

  const [companyModalVisible, setCompanyModalVisible] = useState(false);

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
  const editBankPopup = () => {
    console.log("VIEW TRUE");
    setBankModalVisible(true);
  };

  const editCompanyPopup = () => {
    console.log("VIEW TRUE");
    setCompanyModalVisible(true);
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <div className="col-5">
            <h4 className="card-title">Company Details</h4>
          </div>
          <div className="col-3">
            <RBButton
              variant="primary"
              style={{ float: "right" }}
              onClick={editBankPopup}
            >
              {/* <i className="fa fa-pencil mr-2"></i> */}
              Edit Bank
            </RBButton>
          </div>
          <div className="col-4">
            <RBButton variant="primary" onClick={editCompanyPopup}>
              {/* <i className="fa fa-pencil mr-2"></i> */}
              Edit Company
            </RBButton>
          </div>
        </div>
        <div className="card-body">
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
              Business Type:
            </div>
            <div className="col-lg-8" style={styleValues}>
              Sole Trader
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Address:
            </div>
            <div className="col-lg-8" style={styleValues}>
              1C SATYAM APPT, VISHWAS COLONY, AL Opposite Vishwas Colony Garba
              Ground, Alkapuri BIRMINGHAM West Midlands B46 1AA
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Is Micro Business:
            </div>
            <div className="col-lg-8" style={styleValues}>
              False
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Number Of Employees:
            </div>
            <div className="col-lg-8" style={styleValues}>
              100
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Estimated Turnover:
            </div>
            <div className="col-lg-8" style={styleValues}>
              1234
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Registration No.:
            </div>
            <div className="col-lg-8" style={styleValues}>
              123456
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Partner Name:
            </div>
            <div className="col-lg-8" style={styleValues}>
              Test Parnter 1
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Partner DOB:
            </div>
            <div className="col-lg-8" style={styleValues}>
              1/01/1983
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Partner Address 1:
            </div>
            <div className="col-lg-8" style={styleValues}>
              2 Bell Cottages
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Partner Address 2:
            </div>
            <div className="col-lg-8" style={styleValues}>
              Birmingham Road
            </div>
          </div>{" "}
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Partner Address 3:
            </div>
            <div className="col-lg-8" style={styleValues}>
              BIRMINGHAM
            </div>
          </div>{" "}
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Partner Address 4:
            </div>
            <div className="col-lg-8" style={styleValues}>
              West Midlands
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Partner Postcode:
            </div>
            <div className="col-lg-8" style={styleValues}>
              XYZXYZ
            </div>
          </div>{" "}
          <div className="row mb-3">
            <div className="col-lg-4" style={styleTitle}>
              Time at Current Address:
            </div>
            <div className="col-lg-8" style={styleValues}>
              40 years 0 months
            </div>
          </div>
        </div>
      </div>
      <EditBankDetails
        isModalVisible={bankModalVisible}
        setModalState={setBankModalVisible}
        // callBack={handleGroupCreation}
        modalTitle={"Edit Bank"}
      />
      <EditCompanyDetails
        isModalVisible={companyModalVisible}
        setModalState={setCompanyModalVisible}
        // callBack={handleGroupCreation}
        modalTitle={"Edit Company"}
      />
    </Fragment>
  );
};

export default CompanyandPartnerDetails;
