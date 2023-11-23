import React, { Fragment } from "react";
import { Form, Input, message, Modal, Select } from "antd";

const { Option } = Select;

const CreateEditNote = (props) => {
  const { isModalVisible, setModalState, successCallBack, modalTitle, mode } =
    props;

  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFinishForm = () => {
    message.success("Submit success!");
    successCallBack();
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleClose = () => {
    form.resetFields();
    setModalState(false);
  };

  return (
    <Fragment>
      <Modal
        title={modalTitle}
        open={isModalVisible}
        okText={mode === "add" ? "Create" : "Update"}
        cancelText="Cancel"
        onCancel={handleClose}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onFinishForm();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          name="create_edit_note"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="form-group">
            <Form.Item
              label="Company"
              name="company"
              rules={[
                {
                  required: true,
                  message: "Please select company!",
                },
              ]}
            >
              <Select placeholder="Select a company">
                <Option value="demo">Demo</Option>
                <Option value="demo1">Demo 1</Option>
                <Option value="demo2">Demo 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Site" name="site">
              <Select placeholder="Select a site">
                <Option value="demo">Site 1</Option>
                <Option value="demo1">Site 2</Option>
                <Option value="demo2">Site 3</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Note"
              name="note"
              rules={[
                {
                  required: true,
                  message: "Please select note!",
                },
              ]}
            >
              <Input.TextArea placeholder="Note..." rows={10} />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CreateEditNote;
