import React, { Fragment, useState } from "react";
import { Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";
import CreateSiteGroup from "../SiteGroup/CreateGroup";
import CreateEditReminder from "./CreateEditReminder";

const ReminderList = () => {
  const [createEditModalVisible, setCreateEditModalVisible] = useState(false);
  const [mode, setMode] = useState("add"); //add/edit

  const tempData = [
    {
      key: "1",
      site_name: "Fountain Soc",
      company_name: "Lake Park",
      date: "27-12-2022",
      time: "03:12",
      priority: "2",
      type: "Callback",
    },
    {
      key: "2",
      company_name: "ABCD1234TEST",
      site_name: "",
      date: "30-12-2022",
      time: "01:00",
      priority: "1",
      type: "Callback",
    },
    {
      key: "3",
      company_name: "Eastern Valley",
      site_name: "",
      date: "10-12-2022",
      time: "22:50",
      priority: "3",
      type: "Quote Callback",
    },
    {
      key: "4",
      site_name: "New Zone 1",
      company_name: "EAST ZONE",
      date: "14-01-2023",
      time: "24:00",
      priority: "1",
      type: "Renewal Callback",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRows);
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };

  const columns = [
    {
      title: ENROLL_LABELS.SR_NO,
      width: 80,
      render: (value, item, index) =>
        (Math.ceil(0 / 100) + 1 - 1) * 100 + index + 1,
    },
    {
      key: "company_name",
      title: ENROLL_LABELS.COMPANY_NAME,
      dataIndex: "company_name",
    },
    {
      key: "site_name",
      title: ENROLL_LABELS.SITE_NAME,
      dataIndex: "site_name",
    },
    {
      key: "date",
      title: ENROLL_LABELS.DATE_TIME,
      dataIndex: "date",
      render: (value, item) => (
        <div className="d-flex">
          {item.date}
          <br></br>
          {item.time}
        </div>
      ),
    },
    {
      key: "priority",
      title: ENROLL_LABELS.PRIORITY,
      dataIndex: "priority",
    },
    {
      key: "type",
      title: ENROLL_LABELS.TYPE,
      dataIndex: "type",
    },
    {
      key: "actions",
      title: ENROLL_LABELS.ACTIONS,
      dataIndex: "actions",
      render: (item) => (
        <>
          <div
            className="btn btn-primary shadow sharp mr-2 cursor-pointer"
            onClick={() => handleCrateEditReminderModal(true, "edit")}
          >
            <i className="fa fa-pencil"></i>
          </div>
          <Popconfirm title="Are you sure you want to delete the reminder?">
            <a
              href=" "
              className="btn btn-danger shadow sharp mr-2"
            >
              <i className="fa fa-trash"></i>
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleCrateEditReminderModal = (value, mode) => {
    setCreateEditModalVisible(value);
    setMode(mode);
  };

  const handleModalCallBack = (values) => {
    console.log(values);
  };

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Reminder" },
  ];

  return (
    <Fragment>
      <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Reminder List</h4>
              <div className="card-actions">
                <div
                  className="btn btn-primary btn-rounded white mr-3 cursor-pointer"
                  onClick={() => handleCrateEditReminderModal(true, "add")}
                >
                  <i className="fa fa-plus mr-2"></i>
                  Create Reminder
                </div>
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
                    rowSelection={{
                      ...rowSelection,
                    }}
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
      <CreateEditReminder
        isModalVisible={createEditModalVisible}
        setModalState={setCreateEditModalVisible}
        successCallBack={handleModalCallBack}
        modalTitle={mode === "add" ? "Create Reminder" : "Update Reminder"}
        mode={mode}
      />
    </Fragment>
  );
};

export default ReminderList;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  COMPANY_NAME: "Company Name",
  SITE_NAME: "Site Name",
  DATE_TIME: "Date/Time",
  PRIORITY: "Priority",
  TYPE: "Type",
  ACTIONS: "Actions",
};
