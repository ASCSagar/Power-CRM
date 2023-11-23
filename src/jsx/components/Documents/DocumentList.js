import React, { Fragment, useState } from "react";
import { Popconfirm, Table } from "antd";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";
import CreateEditDocument from "./CreateEditDocument";

const DocumentList = () => {
  const [createEditModalVisible, setCreateEditModalVisible] = useState(false);
  const [mode, setMode] = useState("add"); //add/edit

  const tempData = [
    {
      key: "1",
      company_name: "Demo Company",
      site_name: "Site 1",
      type: "Miscellaneous",
    },
    {
      key: "2",
      company_name: "ABCD 1234",
      site_name: "",
      type: "DocuSign",
    },
    {
      key: "3",
      company_name: "Eastern Valley",
      site_name: "",
      type: "Email",
    },
    {
      key: "4",
      site_name: "New Zone 1",
      company_name: "EAST ZONE",
      type: "LOA",
    },
    {
      key: "5",
      company_name: "Demo 1",
      site_name: "",
      type: "Signed PDF Contract",
    },
    {
      key: "6",
      company_name: "Company Test 11",
      site_name: "",
      type: "Other",
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
          <div className="btn btn-primary shadow sharp mr-2 cursor-pointer">
            <i className="fa fa-download"></i>
          </div>
          <div
            className="btn btn-primary shadow sharp mr-2 cursor-pointer"
            onClick={() => handleCrateEditDocumentModal(true, "edit")}
          >
            <i className="fa fa-pencil"></i>
          </div>
          <Popconfirm title="Are you sure you want to delete the document?">
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

  const handleCrateEditDocumentModal = (value, mode) => {
    setCreateEditModalVisible(value);
    setMode(mode);
  };

  const handleModalCallBack = (values) => {
    console.log(values);
  };

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Document" },
  ];

  return (
    <Fragment>
      <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Document List</h4>
              <div className="card-actions">
                <div
                  className="btn btn-primary btn-rounded white mr-3 cursor-pointer"
                  onClick={() => handleCrateEditDocumentModal(true, "add")}
                >
                  <i className="fa fa-plus mr-2"></i>
                  Add Document
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
      <CreateEditDocument
        isModalVisible={createEditModalVisible}
        setModalState={setCreateEditModalVisible}
        successCallBack={handleModalCallBack}
        modalTitle={mode === "add" ? "Add Document" : "Edit Document"}
        mode={mode}
      />
    </Fragment>
  );
};

export default DocumentList;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  COMPANY_NAME: "Company Name",
  SITE_NAME: "Site Name",
  TYPE: "Type",
  ACTIONS: "Actions",
};
