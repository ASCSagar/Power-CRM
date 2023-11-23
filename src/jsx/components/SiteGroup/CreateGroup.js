import React, { Fragment, useState } from "react";
import { Button, Form, Input, message, Modal, Radio, Select } from "antd";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const CreateSiteGroup = ({
  isModalVisible,
  setModalState,
  callBack,
  modalTitle,
}) => {
  const [form] = Form.useForm();

  const [groupCreateSelection, setGroupCreateSelection] =
    useState("create_group");

  const onFinishForm = () => {
    message.success("Submit success!");
  };

  const onFormFinishFailed = () => {
    message.error("Submit failed!");
  };

  const handleCancel = () => {
    form.resetFields();
    setModalState(false);
  };

  const onChangeGroupCreateSelection = (event) => {
    setGroupCreateSelection(event?.target?.value);
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
          {/* <Form.Item
            label=" "
            name="group_action_type"
            initialValue="create_group"
          >
            <Select>
              <Option value="create_group">Create New Group</Option>
              <Option value="multi-site-eon-group">
                Add to Multi-site EON Group
              </Option>
            </Select>
          </Form.Item> */}
          <Form.Item
            // label=" "
            name="group_create_type"
            initialValue={"create_group"}
          >
            <Radio.Group
              options={[
                {
                  label: "Create New Group",
                  value: "create_group",
                },
                {
                  label: "Add to Multi-site EON Group",
                  value: "multi_site_eon_group",
                },
              ]}
              onChange={onChangeGroupCreateSelection}
              value={groupCreateSelection}
            />
          </Form.Item>
          {console.log("groupCreateSelection", groupCreateSelection)}
          {groupCreateSelection === "create_group" && (
            <>
              <Form.Item
                label="Group Name"
                name="group_name"
                rules={[
                  { required: true, message: "Please enter company name!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Group Type"
                name="group_type"
                initialValue="basic_group"
              >
                <Select>
                  <Option value="basic_group">Basic Group</Option>
                  <Option value="multi_site_group">Multi-site Group</Option>
                </Select>
              </Form.Item>
            </>
          )}
          <Form.Item>
            <div className="d-flex justify-content-start align-items-center pb-3">
              <RBButton variant="primary">Create</RBButton>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CreateSiteGroup;
