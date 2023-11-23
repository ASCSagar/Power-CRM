import React, { useState } from "react";
import { Table, Select, Button } from "antd";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const GasLocationData = (props) => {
  const {
    locationData,
    selectedLocation,
    handleLocationSelectAction,
    setSelectedLocation,
    handleCancel,
    totalRecords = 0,
  } = props;

  const tempData = [
    {
      key: "1",
      address_1: "1",
      address_2: "Lake Park",
      address_3: "SOUTH WEST",
      gas_serial: "ABCD1234TEST",
      green_gas_deal: "Yes",
      igt: "False",
      large_site: "TRUE",
      postcode: "XY 1234",
      region: "NW",
    },
    {
      key: "2",
      address_1: "1",
      address_2: "Fountain Soc",
      address_3: "West Side",
      gas_serial: "ABCD1234TEST",
      green_gas_deal: "Yes",
      igt: "False",
      large_site: "TRUE",
      postcode: "TT 4321",
      region: "NW",
    },
    {
      key: "3",
      address_1: "2",
      address_2: "Eastern Valley",
      address_3: "Bridge",
      gas_serial: "ABCD1234TEST",
      green_gas_deal: "Yes",
      igt: "False",
      large_site: "TRUE",
      postcode: "MH 1211",
      region: "NW",
    },
    {
      key: "4",
      address_1: "1",
      address_2: "New Zone 1",
      address_3: "EAST ZONE",
      gas_serial: "ABCD1234TEST",
      green_gas_deal: "Yes",
      igt: "False",
      large_site: "TRUE",
      postcode: "PM 3421",
      region: "NW",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedLocation(selectedRows);
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
      key: "gas_serial",
      title: ENROLL_LABELS.GAS_SERIAL,
      dataIndex: "gas_serial",
    },
    {
      key: "green_gas_deal",
      title: ENROLL_LABELS.GREEN_GAS_DEAL,
      dataIndex: "green_gas_deal",
    },
    {
      key: "igt",
      title: ENROLL_LABELS.IGT,
      dataIndex: "igt",
    },
    {
      key: "large_site",
      title: ENROLL_LABELS.LARGE_SITE,
      dataIndex: "large_site",
    },
    {
      key: "postcode",
      title: ENROLL_LABELS.POSTCODE,
      dataIndex: "postcode",
    },
    {
      key: "region",
      title: ENROLL_LABELS.REGION,
      dataIndex: "region",
    },
  ];

  return (
    <>
      <Table
        loading={{
          indicator: "Fetching...",
          spinning: false,
        }}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={tempData || []}
        size="small"
      />
      <div className="d-flex">
        <RBButton
          variant="primary"
          type="submit"
          onClick={handleLocationSelectAction}
          disabled={selectedLocation?.length === 0}
        >
          Select Location
        </RBButton>
        <RBButton variant="light" className="ml-3" onClick={handleCancel}>
          Cancel
        </RBButton>
      </div>
    </>
  );
};

export default GasLocationData;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  ADDRESS_1: "Address 1",
  ADDRESS_2: "Address 2",
  ADDRESS_3: "Address 3",
  GAS_SERIAL: "Gas Serial #",
  GREEN_GAS_DEAL: "Green Gas Deal",
  IGT: "IGT",
  LARGE_SITE: "Large Site",
  POSTCODE: "Postcode",
  REGION: "Region",
};
