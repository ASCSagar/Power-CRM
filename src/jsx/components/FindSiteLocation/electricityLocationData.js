import React, { useState } from "react";
import { Table, Select, Button } from "antd";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const ElectricityLocationData = (props) => {
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
      address_4: "Lorem",
      ele_serial: "ABCD1234TEST",
      green_ele_deal: "Yes",
      key_meter: "No",
      mpan_bottom: "132465798410",
      mpan_top: "0132498",
      meter_type: "N",
      postcode: "UI 32456",
      region: "IO",
      related: "Yes",
    },
    {
      key: "2",
      address_1: "1",
      address_2: "Fountain Soc",
      address_3: "West Side",
      ele_serial: "ABCD1234TEST",
      green_ele_deal: "Yes",
      key_meter: "No",
      mpan_bottom: "132465798410",
      mpan_top: "0132498",
      meter_type: "N",
      postcode: "UI 32456",
      region: "IO",
      related: "Yes",
    },
    {
      key: "3",
      address_1: "2",
      address_2: "Eastern Valley",
      address_3: "Bridge",
      ele_serial: "ABCD1234TEST",
      green_ele_deal: "Yes",
      key_meter: "No",
      mpan_bottom: "132465798410",
      mpan_top: "0132498",
      meter_type: "N",
      postcode: "UI 32456",
      region: "IO",
      related: "Yes",
    },
    {
      key: "4",
      address_1: "1",
      address_2: "New Zone 1",
      address_3: "EAST ZONE",
      ele_serial: "ABCD1234TEST",
      green_ele_deal: "Yes",
      key_meter: "No",
      mpan_bottom: "132465798410",
      mpan_top: "0132498",
      meter_type: "N",
      postcode: "UI 32456",
      region: "IO",
      related: "Yes",
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
      key: "address_4",
      title: ENROLL_LABELS.ADDRESS_4,
      dataIndex: "address_4",
    },
    {
      key: "de_energised",
      title: ENROLL_LABELS.DE_ENERGISED,
      dataIndex: "de_energised",
    },
    {
      key: "ele_serial",
      title: ENROLL_LABELS.ELE_SERIAL,
      dataIndex: "ele_serial",
    },
    {
      key: "green_ele_deal",
      title: ENROLL_LABELS.GREEN_ELE_DEAL,
      dataIndex: "green_ele_deal",
    },
    {
      key: "key_meter",
      title: ENROLL_LABELS.KEY_METER,
      dataIndex: "key_meter",
    },
    {
      key: "mpan_bottom",
      title: ENROLL_LABELS.MPAN_BOTTOM,
      dataIndex: "mpan_bottom",
    },
    {
      key: "mpan_top",
      title: ENROLL_LABELS.MPAN_TOP,
      dataIndex: "mpan_top",
    },
    {
      key: "meter_type",
      title: ENROLL_LABELS.METER_TYPE,
      dataIndex: "meter_type",
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
    {
      key: "related",
      title: ENROLL_LABELS.RELATED,
      dataIndex: "related",
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

export default ElectricityLocationData;

const ENROLL_LABELS = {
  SR_NO: "Sr. No.",
  AMR: "Address 1",
  ADDRESS_1: "Address 1",
  ADDRESS_2: "Address 2",
  ADDRESS_3: "Address 3",
  ADDRESS_4: "Address 4",
  DE_ENERGISED: "De Energised",
  ELE_SERIAL: "Electricity Serial #",
  GREEN_ELE_DEAL: "Green Electricity Deal",
  KEY_METER: "Key Meter",
  MPAN_BOTTOM: "MPAN Bottom",
  MPAN_TOP: "MPAN Top",
  METER_TYPE: "Meter Type",
  POSTCODE: "Postcode",
  REGION: "Region",
  RELATED: "Related",
};
