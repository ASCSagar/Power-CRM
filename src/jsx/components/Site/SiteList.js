import React, { Fragment, useState } from "react";
import { Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";
import CreateSiteGroup from "../SiteGroup/CreateGroup";

const Sites = () => {
  const [groupModalVisible, setGroupModalVisible] = useState(false);

  const tempData = [
    {
      key: "1",
      site_name: "Fountain Soc",
      company_name: "Lake Park",
    },
    {
      key: "2",
      site_name: "West Side",
      company_name: "ABCD1234TEST",
    },
    {
      key: "3",
      site_name: "Eastern Valley",
      company_name: "Bridge",
    },
    {
      key: "4",
      site_name: "New Zone 1",
      company_name: "EAST ZONE",
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
      key: "site_name",
      title: ENROLL_LABELS.SITE_NAME,
      dataIndex: "site_name",
    },
    {
      key: "company_name",
      title: ENROLL_LABELS.COMPANY_NAME,
      dataIndex: "company_name",
    },
    {
      key: "actions",
      title: ENROLL_LABELS.ACTIONS,
      dataIndex: "actions",
      render: (item) => (
        <>
          <Link to="/generate-quote">
            <a href=" " className="btn btn-info shadow sharp mr-2">
              <i className="fa fa-money"></i>
            </a>
          </Link>
          <Link to="/site-details/demo1234">
            <a href=" " className="btn btn-primary shadow sharp mr-2">
              <i className="fa fa-pencil"></i>
            </a>
          </Link>
          <Popconfirm title="Are you sure you want to delete the site?">
            <a href=" " className="btn btn-danger shadow sharp mr-2">
              <i className="fa fa-trash"></i>
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleGroupCreation = () => {
    console.log("group created");
  };

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Site" },
  ];

  return (
    <Fragment>
      <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Sites</h4>
              <div className="card-actions">
                <Link
                  to="/create-site"
                  className="btn btn-primary btn-rounded mr-3"
                >
                  <i className="fa fa-plus mr-2"></i>
                  Create Site
                </Link>
                <ButtonGroup>
                  <Dropdown>
                    <Dropdown.Toggle className="btn-rounded">
                      Actions
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#">
                        Allocate / Deallocate
                      </Dropdown.Item>
                      <Dropdown.Item to="#">Set Field</Dropdown.Item>
                      <Dropdown.Item to="#">Export To Excel</Dropdown.Item>
                      <Dropdown.Item to="#">Set Support</Dropdown.Item>
                      <Dropdown.Item
                        to="#"
                        onClick={() => setGroupModalVisible(true)}
                      >
                        Add to Group
                      </Dropdown.Item>
                      <Dropdown.Item to="#">Remove From Group</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
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
      <CreateSiteGroup
        isModalVisible={groupModalVisible}
        setModalState={setGroupModalVisible}
        callBack={handleGroupCreation}
        modalTitle={"Group"}
      />
    </Fragment>
  );
};

export default Sites;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  SITE_NAME: "Site Name",
  COMPANY_NAME: "Company Name",
  ACTIONS: "Actions",
};
