import React, { Fragment, useState } from "react";
import { Table } from "antd";
import AddNewNote from "./AddNewNote";

const ViewNotesList = () => {
  const [noteModalVisible, setNoteModalVisible] = useState(false);

  const tempData = [];

  const showCreateNoteModal = () => {
    setNoteModalVisible(true);
  };

  const columns = [
    {
      title: ENROLL_LABELS.SR_NO,
      width: 80,
      render: (value, item, index) =>
        (Math.ceil(0 / 100) + 1 - 1) * 100 + index + 1,
    },
    {
      key: "username",
      title: ENROLL_LABELS.USER,
      dataIndex: "username",
    },
    {
      key: "note",
      title: ENROLL_LABELS.NOTE,
      dataIndex: "note",
    },
    {
      key: "time",
      title: ENROLL_LABELS.TIME,
      dataIndex: "time",
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
              <h4 className="card-title">Notes</h4>
              <div className="card-actions">
                <span
                  onClick={showCreateNoteModal}
                  style={{ display: "inline", cursor: "pointer" }}
                  className="btn btn-primary btn-rounded mr-3"
                >
                  <i className="fa fa-plus mr-2"></i>
                  Add Notes
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
      <AddNewNote
        isModalVisible={noteModalVisible}
        setModalState={setNoteModalVisible}
        callBack={handleGroupCreation}
        modalTitle={"Add Notes"}
      />
    </Fragment>
  );
};

export default ViewNotesList;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  USER: "Username",
  NOTE: "Note",
  TIME: "Time",
};
