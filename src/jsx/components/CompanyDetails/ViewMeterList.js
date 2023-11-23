import React, { Fragment, useState } from "react";
import { Popconfirm, Table } from "antd";

import CreateMeter from "./CreateMeter";

const ViewMeterList = () => {
  const [meterModalVisible, setMeterModalVisible] = useState(false);

  const tempData = [
    {
      key: "1",
      type: "New",
      reference: "test dev",
      quote_details: "abc",
    },
  ];

  const showCreateNoteModal = () => {
    setMeterModalVisible(true);
  };

  const columns = [
    {
      title: ENROLL_LABELS.SR_NO,
      width: 80,
      render: (value, item, index) =>
        (Math.ceil(0 / 100) + 1 - 1) * 100 + index + 1,
    },
    {
      key: "type",
      title: ENROLL_LABELS.TYPE,
      dataIndex: "type",
    },
    {
      key: "reference",
      title: ENROLL_LABELS.REFERENCE,
      dataIndex: "reference",
    },
    {
      key: "quote_details",
      title: ENROLL_LABELS.QUOTE_DETAILS,
      dataIndex: "quote_details",
    },
    {
      key: "actions",
      title: ENROLL_LABELS.ACTIONS,
      dataIndex: "actions",
      render: (item) => (
        <>
          <Popconfirm title="Are you sure you want to delete the Meter?">
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
        <div className="col-2"></div>
        <div className="col-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Meter Details</h4>
              <div className="card-actions">
                <span
                  onClick={showCreateNoteModal}
                  style={{ display: "inline", cursor: "pointer" }}
                  className="btn btn-primary btn-rounded mr-3"
                >
                  <i className="fa fa-plus mr-2"></i>
                  Add Meter
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
      <CreateMeter
        isModalVisible={meterModalVisible}
        setModalState={setMeterModalVisible}
        callBack={handleGroupCreation}
        modalTitle={"Add Meter"}
      />
    </Fragment>
  );
};

export default ViewMeterList;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  TYPE: "Type",
  REFERENCE: "Reference",
  QUOTE_DETAILS: "Quote Details",
  ACTIONS: "Actions",
};
