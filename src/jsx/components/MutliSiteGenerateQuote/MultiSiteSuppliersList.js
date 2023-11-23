import React, { useState } from "react";
import { Dropdown as ADropdown, Table, Select, Menu } from "antd";
import { Button as RBButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import RefineSiteDataForm from "./RefineDataForm";

const { Option } = Select;

const MultiSiteSupplierList = (props) => {
  const { supplierList, totalRecords = 0 } = props;

  const tempDataArray = [];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  for (let i = 0; i < 3; ++i) {
    tempDataArray.push({
      key: i.toString(),
      supplier: "https://picsum.photos/250/150/?blur=1",
      unit_rate: "0.8",
      total_sites: "site " + (i + 1),
      term: "1y",
      days_rate: "11.500",
      standing_charges: "31.12",
      annual_cost: "2354.12",
      difference: "PM 3421",
      percentage: "NW",
    });
  }

  const tempData = [
    {
      key: "1",
      supplier: "https://picsum.photos/250/150/?blur=1",
      unit_rate: "0.8",
      total_sites: "3 sites",
      term: "1y",
      days_rate: "12.80",
      standing_charges: "34.00",
      annual_cost: "4567.09",
      difference: "XY 1234",
      percentage: "NW",
      children: tempDataArray,
    },
    {
      key: "2",
      supplier: "https://picsum.photos/250/150/?blur=1",
      unit_rate: "0.8",
      total_sites: "3 sites",
      term: "1y",
      days_rate: "14.500",
      standing_charges: "35.50",
      annual_cost: "2558.34",
      difference: "TT 4321",
      percentage: "NW",
      children: tempDataArray,
    },
    {
      key: "3",
      supplier: "https://picsum.photos/250/150/?blur=1",
      unit_rate: "0.8",
      total_sites: "3 sites",
      term: "1y",
      days_rate: "15.500",
      standing_charges: "28.00",
      annual_cost: "6584.54",
      difference: "MH 1211",
      percentage: "NW",
      children: tempDataArray,
    },
    {
      key: "4",
      supplier: "https://picsum.photos/250/150/?blur=1",
      unit_rate: "0.8",
      total_sites: "3 sites",
      term: "1y",
      days_rate: "11.500",
      standing_charges: "31.12",
      annual_cost: "2354.12",
      difference: "PM 3421",
      percentage: "NW",
      children: tempDataArray,
    },
  ];

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Action 1",
        },
        {
          key: "2",
          label: "Action 2",
        },
      ]}
    />
  );

  const expandedRowRender = () => {
    const data = [];
    for (let i = 0; i < 2; ++i) {
      data.push({
        key: i.toString(),
        supplier: "https://picsum.photos/250/150/?blur=1",
        unit_rate: "0.8",
        total_sites: "1",
        term: "1y",
        days_rate: "11.500",
        standing_charges: "31.12",
        annual_cost: "2354.12",
        difference: "PM 3421",
        percentage: "NW",
      });
    }
    return (
      <Table
        className="ml-0"
        showHeader={false}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };

  const columns = [
    // {
    //   title: ENROLL_LABELS.SR_NO,
    //   width: 80,
    //   render: (value, item, index) =>
    //     (Math.ceil(0 / 100) + 1 - 1) * 100 + index + 1,
    //   fixed: "left",
    // },
    {
      key: "total_sites",
      title: ENROLL_LABELS.TOTAL_SITES,
      dataIndex: "total_sites",
      fixed: "left",
      align: "center",
      width: 100,
    },
    {
      key: "unit_rate",
      title: ENROLL_LABELS.UNIT_RATE,
      dataIndex: "unit_rate",
      fixed: "left",
      align: "center",
      width: 80,
    },
    {
      key: "supplier",
      title: ENROLL_LABELS.SUPPLIER,
      dataIndex: "supplier",
      fixed: "left",
      width: 90,
      render: (image) => {
        return (function Actions() {
          return (
            <div className="logo">
              <img src={image} width="50px" />
            </div>
          );
        })();
      },
    },
    {
      key: "term",
      title: ENROLL_LABELS.TERM,
      dataIndex: "term",
      align: "center",
      width: 70,
    },
    {
      key: "days_rate",
      title: ENROLL_LABELS.DAYS_RATE,
      dataIndex: "days_rate",
      align: "center",
    },
    {
      key: "standing_charges",
      title: ENROLL_LABELS.STANDING_CHARGES,
      dataIndex: "standing_charges",
      align: "center",
    },
    {
      key: "annual_cost",
      title: ENROLL_LABELS.ANNUAL_COST,
      dataIndex: "annual_cost",
      align: "center",
    },
    {
      key: "difference",
      title: ENROLL_LABELS.DIFFERENCE,
      dataIndex: "difference",
      align: "center",
    },
    {
      key: "percentage",
      title: ENROLL_LABELS.PERCENTAGE,
      dataIndex: "percentage",
      align: "center",
    },
    {
      key: "actions",
      title: ENROLL_LABELS.ACTIONS,
      dataIndex: "actions",
      width: 70,
      align: "center",
      render: (item) => (
        <>
          <Dropdown className="dropdown ml-auto text-center">
            <Dropdown.Toggle
              variant=""
              className="btn-link i-false"
              data-toggle="dropdown"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <circle fill="#000000" cx={5} cy={12} r={2} />
                  <circle fill="#000000" cx={12} cy={12} r={2} />
                  <circle fill="#000000" cx={19} cy={12} r={2} />
                </g>
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
              <Dropdown.Item to="#">
                <i class="fa fa-file-excel-o mr-2"></i>
                Export Excel
              </Dropdown.Item>
              <Dropdown.Item to="#">
                <i class="fa fa-file-pdf-o mr-2"></i>
                Export PDF
              </Dropdown.Item>
              <Dropdown.Item to="#">
                <i class="fa fa-envelope mr-2"></i>
                Email Quote
              </Dropdown.Item>
              <Dropdown.Item to="#">
                <i class="fa fa-floppy-o mr-2"></i>
                Save
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Supplier List</h4>
          {supplierList && (
            <div className="card-actions">
              <RBButton
                variant="primary"
                className="align-items-center btn-sm mr-3"
                onClick={showDrawer}
              >
                <i className="fa fa-sliders mr-2"></i>
                Refine Data
              </RBButton>
              <ButtonGroup>
                <Dropdown>
                  <Dropdown.Toggle className="btn-sm">Actions</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      <i class="fa fa-file-excel-o  mr-2"></i>
                      Export Excel
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      <i class="fa fa-file-pdf-o  mr-2"></i>
                      Export PDF
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      <i class="fa fa-envelope mr-2"></i>
                      Email Quote
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      <i class="fa fa-download mr-2"></i>
                      Add Bespoke Quote
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
            </div>
          )}
        </div>
        <div className="card-body">
          {supplierList ? (
            <Table
              size="small"
              scroll={{ x: 1300 }}
              loading={{
                indicator: "Fetching...",
                spinning: false,
              }}
              columns={columns}
              // dataSource={tempData || []} // TO-DO uncomment when actual data present
              dataSource={supplierList ? tempData : []}
            />
          ) : (
            <p className="text-center mt-3">
              Please enter the supply details and compare to see the best
              suppliers around you.
            </p>
          )}
        </div>
      </div>
      <RefineSiteDataForm open={open} onClose={onClose} />
    </>
  );
};

export default MultiSiteSupplierList;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  TOTAL_SITES: "Site",
  UNIT_RATE: "Unit Rate Uplift",
  SUPPLIER: "Supplier",
  TERM: "Term",
  DAYS_RATE: "Days Rate",
  STANDING_CHARGES: "Standing Charges",
  ANNUAL_COST: "Annual Cost",
  DIFFERENCE: "Difference",
  PERCENTAGE: "%",
  ACTIONS: "Actions",
};
