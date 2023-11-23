import React, { Fragment, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";
import AddNewCallback from "./AddNewCallback";

const CompanyDetailsList = () => {
  const [callbackModalVisible, setCallbackModalVisible] = useState(false);

  const setModalView = () => {
    console.log("VIEW TRUE");
    setCallbackModalVisible(true);
  };

  const tempData = [
    {
      key: "1",
      company_name: "Smart Owl",
      address_1: "1C SATYAM APPT, VISHWAS COLONY, AL",
      address_2: "Opposite Vishwas Colony Garba Ground, Alkapuri",
      address_3: "BIRMINGHAM",
      postcode: "B46 1AA",
    },
    {
      key: "2",
      company_name: "Test 1234",
      address_1: "test 1",
      address_2: "Haming",
      address_3: "Test Address",
      postcode: "395 009",
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
      key: "address_1",
      title: ENROLL_LABELS.ADDRESS_1,
      dataIndex: "address_1",
    },
    {
      key: "address_2",
      title: ENROLL_LABELS.ADDRESS_2,
      dataIndex: "address_2",
    },
    {
      key: "address_3",
      title: ENROLL_LABELS.ADDRESS_3,
      dataIndex: "address_3",
    },
    {
      key: "postcode",
      title: ENROLL_LABELS.PostCode,
      dataIndex: "postcode",
    },
    {
      key: "actions",
      title: ENROLL_LABELS.ACTIONS,
      dataIndex: "actions",
      width: 140,
      render: (item) => (
        <>
          <Link
            to="/company-details/demo1234"
            className="btn btn-primary shadow sharp mr-2"
          >
            <i className="fa fa-eye"></i>
          </Link>
          <span
            className="btn btn-info shadow sharp mr-2"
            style={{ cursor: "pointer" }}
            onClick={setModalView}
          >
            <i className="fa fa-phone"></i>
          </span>
        </>
      ),
    },
  ];

  // const handleGroupCreation = () => {
  //   console.log("callback created");
  // };

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Company Details" },
  ];

  return (
    <Fragment>
      <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Company Details</h4>
              <div className="card-actions">
                {/* <ButtonGroup>
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-rounded  mr-2">
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
                                                onClick={() => setCallbackModalVisible(true)}
                                            >
                                                Add to Group
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">Remove From Group</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ButtonGroup> */}
                <Link
                  to="/create-company"
                  className="btn btn-primary btn-rounded mr-3"
                >
                  <i className="fa fa-plus mr-2"></i>
                  Create Company
                </Link>
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
      <AddNewCallback
        isModalVisible={callbackModalVisible}
        setModalState={setCallbackModalVisible}
        // callBack={handleGroupCreation}
        modalTitle={"Add Callback"}
      />
    </Fragment>
  );
};

export default CompanyDetailsList;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  COMPANY_NAME: "Company Name",
  ADDRESS_1: "Address 1",
  ADDRESS_2: "Address 2",
  ADDRESS_3: "Address 3",
  PostCode: "Postcode",
  ACTIONS: "Actions",
};
