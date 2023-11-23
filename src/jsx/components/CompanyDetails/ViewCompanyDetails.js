import React, { Fragment } from "react";

import CompanyandPartnerDetails from "./CompanyandPartnerDetails";
import CompanyContactDetails from "./CompanyContactDetails";
import CallBackList from "./ViewCallbackList";
import UpdateHistoryList from "./ViewUpdateHistoryList";
import ViewNotesList from "./ViewNotesList";
import ViewSiteList from "./SiteDetailsList";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";

const ViewCompanyDetails = () => {
  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Company", link: "/companies" },
    { label: "Test" },
  ];

  return (
    <Fragment>
      <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
      <div className="row">
        <div className="col-lg-6">
          <CompanyandPartnerDetails />
        </div>
        <div className="col-lg-6">
          <CompanyContactDetails />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ViewSiteList />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ViewNotesList />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <CallBackList />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <UpdateHistoryList />
        </div>
      </div>
    </Fragment>
  );
};

export default ViewCompanyDetails;
