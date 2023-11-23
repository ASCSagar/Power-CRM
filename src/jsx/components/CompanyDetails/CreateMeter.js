import React, { Fragment, useState } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const CreateMeter = ({
  isModalVisible,
  setModalState,
  callBack,
  modalTitle,
}) => {
  const [form] = Form.useForm();

  const [meterOptionSelected, setMeterOptionSelected] = useState(false);

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

  const MeterOption = (value) => {
    console.log(value, "VALUE");
    if (value) {
      setMeterOptionSelected(true);
    }
  };

  return (
    <Fragment>
      <Modal
        title={modalTitle || "Create Meter"}
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
            <Form.Item label="Meter Type" name="meter_type">
              <Select
                placeholder="Select Meter Type"
                onChange={(value) => {
                  MeterOption(value);
                }}
              >
                <Option value="gas">Gas</Option>
                <Option value="electricity">Electricity</Option>
              </Select>
            </Form.Item>
            {meterOptionSelected && (
              <Form.Item
                label="Meter Number"
                name="meter_number"
                rules={[
                  { required: true, message: "Please enter Meter Number!" },
                ]}
              >
                <Input />
              </Form.Item>
            )}
          </>
          <Form.Item>
            <div className="d-flex justify-content-start align-items-center pb-3">
              <RBButton variant="primary" type="submit">
                Create Meter
              </RBButton>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CreateMeter;
