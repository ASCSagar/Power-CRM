import React, { Fragment } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import { Button as RBButton } from "react-bootstrap";
import { Switch } from "antd";

const { Option } = Select;

const EditCompanyDetails = ({
  isModalVisible,
  setModalState,
  callBack,
  modalTitle,
}) => {
  const [form] = Form.useForm();

  const onFinishForm = () => {
    message.success("Submit success!");
    console.log("Submit success!");
    setModalState(false);
  };

  const onFormFinishFailed = () => {
    message.error("Submit failed!");
  };

  const handleCancel = () => {
    form.resetFields();
    setModalState(false);
  };
  const onChangeSwitch = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Fragment>
      <Modal
        title={modalTitle || "Edit Company Details"}
        open={isModalVisible}
        footer={null}
        destroyOnClose
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinishForm}
          onFinishFailed={onFormFinishFailed}
          autoComplete="off"
          footer={null}
        >
          <>
            <Form.Item
              label="Postcode"
              className="text-label"
              name="postcode"
              rules={[{ required: true, message: "Please enter Postcode!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Company Name"
              className="text-label"
              name="company_name"
              rules={[
                { required: true, message: "Please enter Company Name!" },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Business Type" name="bussiness_type">
              <Select placeholder="Select Business Type">
                <Option value="demo">Demo</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Is Micro Buisness"
              className="text-label"
              name="is_micro_buisness"
              rules={[{ required: false, message: "!Required" }]}
            >
              <Switch defaultChecked onChange={onChangeSwitch} />
            </Form.Item>
            <Form.Item
              label="Number of Employees"
              className="text-label"
              name="number_of_employees"
              rules={[
                {
                  required: false,
                  message: "Please enter Number of Employees!",
                },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Estimated Turnover"
              name="estimated_turnover"
              style={{ flex: 1 }}
              rules={[
                {
                  required: false,
                  message: "Please Enter Estimated Turnover!",
                },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Registration No."
              name="registration_number"
              style={{ flex: 1 }}
              rules={[
                {
                  required: true,
                  message: "Please Enter Registration Number!",
                },
              ]}
            >
              <Input placeholder="Registration Number" />
            </Form.Item>
          </>
          <Form.Item>
            <div className="d-flex justify-content-start align-items-center pb-3">
              <RBButton variant="primary" type="submit">
                Save
              </RBButton>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default EditCompanyDetails;
