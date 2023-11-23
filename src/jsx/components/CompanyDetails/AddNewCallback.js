import React, { Fragment } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import { Button as RBButton } from "react-bootstrap";
import { TimePicker } from "antd";

import { DatePicker } from "antd";

const format = "HH:mm";
const { Option } = Select;

const AddNewCallback = ({
  isModalVisible,
  setModalState,
  callBack,
  modalTitle,
}) => {
  const [form] = Form.useForm();

  // const [, setGroupCreateSelection] = useState("create_group");

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

  // const onChangeGroupCreateSelection = (event) => {
  //   setGroupCreateSelection(event?.target?.value);
  // };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <Fragment>
      <Modal
        title={modalTitle || "Create Group"}
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
              label="Intereaction Type"
              name="intereaction_type"
              initialValue=""
            >
              <Select>
                <Option value="renewal">Renewal</Option>
                <Option value="company_callback">Company Callback</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Callback Date"
              name="callback_date"
              style={{ flex: 1 }}
              rules={[
                {
                  required: true,
                  message: "Please Enter Callback Date!",
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                size={"large"}
                onChange={onChangeDate}
              />
            </Form.Item>
            <Form.Item
              label="Callback Time"
              name="callback_time"
              style={{ flex: 1 }}
              rules={[
                {
                  required: true,
                  message: "Please Enter Callback Time!",
                },
              ]}
            >
              <TimePicker format={format} onChange={onChangeTime} />
            </Form.Item>
            <Form.Item
              label="Contact"
              name="contact"
              rules={[
                { required: true, message: "Please enter Contact details!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Notes"
              name="notes"
              rules={[
                { required: true, message: "Please enter Callback Notes!" },
              ]}
            >
              <Input />
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

export default AddNewCallback;
