import React, { Fragment, useState } from "react";
import { Popconfirm, Table, Tooltip } from "antd";

import CreateSite from "./CreateSite";
import ViewMeterList from "./ViewMeterList";

const ViewSitesList = () => {
  const [siteModalVisible, setSiteModalVisible] = useState(false);
  const [viewMeterState, setViewMeterState] = useState(false);
  const tempData = [
    {
      key: "1",
      site: "Smart Owl",
      address: "1C SATYAM APPT, VISHWAS COLONY, AL",
      no_of_emloyees: "30",
    },
  ];

  const showCreateSiteModal = () => {
    setSiteModalVisible(true);
  };

  const ViewMeterListState = () => {
    setViewMeterState(!viewMeterState);
  };

  const columns = [
    {
      title: ENROLL_LABELS.SR_NO,
      width: 80,
      render: (value, item, index) =>
        (Math.ceil(0 / 100) + 1 - 1) * 100 + index + 1,
    },
    {
      key: "site",
      title: ENROLL_LABELS.SITE,
      dataIndex: "site",
    },
    {
      key: "address",
      title: ENROLL_LABELS.ADDRESS,
      dataIndex: "address",
    },
    {
      key: "no_of_emloyees",
      title: ENROLL_LABELS.NO_EMPLOYEE,
      dataIndex: "no_of_emloyees",
    },
    {
      key: "actions",
      title: ENROLL_LABELS.ACTIONS,
      dataIndex: "actions",
      render: (item) => (
        <>
          <Tooltip
            title={
              !viewMeterState ? "View Meter Details" : "Hide Meter Details"
            }
          >
            <button
              className="btn btn-info shadow sharp mr-2 mb-2"
              onClick={ViewMeterListState}
            >
              <i className="fa fa-eye"></i>
            </button>
          </Tooltip>
          <Popconfirm title="Are you sure you want to delete the site?">
            <button className="btn btn-danger shadow sharp mr-2 mb-2">
              <i className="fa fa-trash"></i>
            </button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleGroupCreation = () => {
    console.log("callback created");
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Site Details</h4>
              <div className="card-actions">
                <span
                  onClick={showCreateSiteModal}
                  style={{ display: "inline", cursor: "pointer" }}
                  className="btn btn-primary btn-rounded mr-3"
                >
                  <i className="fa fa-plus mr-2"></i>
                  Add Site
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="w-100 table-responsive">
                <div
                  id="patientTable_basic_table"
                  className="dataTables_wrapper"
                >
                  <Table
                    loading={{
                      indicator: "Fetching...",
                      spinning: false,
                    }}
                    // rowSelection={{
                    //     ...rowSelection,
                    // }}
                    columns={columns}
                    dataSource={tempData || []}
                    className="display dataTable no-footer w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {viewMeterState && <ViewMeterList />}
      <CreateSite
        isModalVisible={siteModalVisible}
        setModalState={setSiteModalVisible}
        callBack={handleGroupCreation}
        modalTitle={"Add Site"}
      />
    </Fragment>
  );
};

export default ViewSitesList;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  SITE: "Site",
  ADDRESS: "Address",
  NO_EMPLOYEE: "No. Of Employee",
  ACTIONS: "Actions",
};
