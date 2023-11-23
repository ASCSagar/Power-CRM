import React, { Fragment } from "react";
import { Button, Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SiteAddressForm = ({ setFindSiteModalVisible }) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Site Address</h4>
        </div>
        <div className="card-body">
          <div className="d-flex">
            <Form.Item
              label="Postcode"
              name="post_code"
              rules={[
                {
                  required: true,
                  message: "Please enter post code!",
                },
              ]}
            >
              <Input placeholder="Enter/Search By Postcode" />
            </Form.Item>
            <Form.Item label=" ">
              <Button
                type="primary"
                onClick={() => setFindSiteModalVisible(true)}
              >
                <SearchOutlined />
              </Button>
            </Form.Item>
          </div>
          <Form.Item label="Address Line 1" name="address_line1">
            <Input placeholder="Address line 1" />
          </Form.Item>
          <Form.Item label="Address Line 2" name="address_line2">
            <Input placeholder="Address line 2" />
          </Form.Item>
          <Form.Item label="Address Line 3" name="address_line3">
            <Input placeholder="Address line 3" />
          </Form.Item>
          <Form.Item label="Address Line 4" name="address_line4">
            <Input placeholder="Address line 4" />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: "Please select country!",
              },
            ]}
          >
            <Select placeholder="Select a country">
              <Select.Option value="england">England</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </div>
    </Fragment>
  );
};

export default SiteAddressForm;
