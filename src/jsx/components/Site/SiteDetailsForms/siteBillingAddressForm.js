import React, { Fragment } from "react";
import { Form, Input, Radio, Select } from "antd";

const SiteBillingAddressForm = ({
  onChangeAddressRadio,
  addressDuplicatedValue,
}) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Billing Address</h4>
        </div>
        <div className="card-body">
          <Form.Item label="Billing Address" name="billing_address">
            <Radio.Group
              options={[
                {
                  label: "Same as Site Address",
                  value: "same_as_site",
                },
                {
                  label: "Same as Company Address",
                  value: "same_as_company",
                },
              ]}
              onChange={onChangeAddressRadio}
              value={addressDuplicatedValue}
            />
          </Form.Item>
          <Form.Item label="Address Line 1" name="bill_address_line1">
            <Input placeholder="Address line 1" />
          </Form.Item>
          <Form.Item label="Address Line 2" name="bill_address_line2">
            <Input placeholder="Address line 2" />
          </Form.Item>
          <Form.Item label="Address Line 3" name="bill_address_line3">
            <Input placeholder="Address line 3" />
          </Form.Item>
          <Form.Item label="Address Line 4" name="bill_address_line4">
            <Input placeholder="Address line 4" />
          </Form.Item>
          <div className="row">
            <div className="col-6">
              <Form.Item
                label="Postcode"
                name="bill_post_code"
                rules={[
                  {
                    required: true,
                    message: "Please enter post code!",
                  },
                ]}
              >
                <Input placeholder="Postcode" />
              </Form.Item>
            </div>
            <div className="col-6">
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
                <Select placeholder="Select a company">
                  <Select.Option value="england">England</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SiteBillingAddressForm;
