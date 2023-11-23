import React, { Fragment, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";

const MultiSites = () => {
  const tempDataArray = [];

  for (let i = 0; i < 3; ++i) {
    tempDataArray.push({
      key: i.toString(),
      site_name: "Fountain Soc ",
      company_name: "Lake Park",
    });
  }

  const tempData = [
    {
      key: "2",
      site_name: "West Side",
      company_name: "ABCD1234TEST",
      children: tempDataArray,
    },
    {
      key: "3",
      site_name: "Eastern Valley",
      company_name: "Bridge",
      children: tempDataArray,
    },
    {
      key: "4",
      site_name: "New Zone 1",
      company_name: "EAST ZONE",
      children: tempDataArray,
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
    // {
    //   key: "actions",
    //   title: ENROLL_LABELS.ACTIONS,
    //   dataIndex: "actions",
    //   render: (item) => (
    //     <>
    //       <a href="/generate-quote" className="btn btn-info shadow sharp mr-2">
    //         <i className="fa fa-money"></i>
    //       </a>
    //       <a
    //         href=" "
    //         className="btn btn-primary shadow sharp mr-2"
    //       >
    //         <i className="fa fa-pencil"></i>
    //       </a>
    //       <a
    //         href=" "
    //         className="btn btn-danger shadow sharp mr-2"
    //       >
    //         <i className="fa fa-trash"></i>
    //       </a>
    //     </>
    //   ),
    // },
  ];

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Multi Site" },
  ];

  return (
    <Fragment>
      <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">MultiSites</h4>
              <div className="card-actions">
                <ButtonGroup>
                  <Dropdown>
                    <Dropdown.Toggle className="btn-rounded">
                      Actions
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {/* <Dropdown.Item to="#">
                        Allocate / Deallocate
                      </Dropdown.Item>
                      <Dropdown.Item to="#">Set Field</Dropdown.Item>
                      <Dropdown.Item to="#">Export To Excel</Dropdown.Item>
                      <Dropdown.Item to="#">Set Support</Dropdown.Item>
                      <Dropdown.Item to="#">Add to Group</Dropdown.Item> */}
                      {/* <Dropdown.Item to="#">
                        Allocate / Deallocate
                      </Dropdown.Item>
                      <Dropdown.Item to="#">Set Field</Dropdown.Item>
                      <Dropdown.Item to="#">Export To Excel</Dropdown.Item>
                      <Dropdown.Item to="#">Set Support</Dropdown.Item>
                      <Dropdown.Item to="#">Add to Group</Dropdown.Item> */}
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
    </Fragment>
  );
};

export default MultiSites;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  SITE_NAME: "Site Name",
  COMPANY_NAME: "Company Name",
  ACTIONS: "Actions",
};
