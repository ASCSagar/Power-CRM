import React, { Fragment, useState } from "react";
import { Form, Input, Select } from "antd";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import GasDetailsForm from "./GasDetailsForm";
import ElectricityDetailsForm from "./ElectricityDetailsForm";

const MultiSiteSelectionForm = ({ supplyType }) => {
  const [activeDefault, setActiveDefault] = useState(0);
  const [showSiteDetails, setShowSiteDetails] = useState(false);

  const handleSiteSelection = () => {
    setShowSiteDetails(true);
  };

  return (
    <Fragment>
      {showSiteDetails ? (
        supplyType === "gas" ? (
          <GasDetailsForm setShowSiteDetails={setShowSiteDetails} />
        ) : (
          <ElectricityDetailsForm setShowSiteDetails={setShowSiteDetails} />
        )
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="card shadow-none">
              <div className="card-header p-1 justify-content-center">
                <h4 className="card-title">Group Details</h4>
              </div>
              <div className="card-body pb-0 pl-0 pr-0">
                <Form.Item label="Group" name="group" className="mb-1">
                  <Select>
                    <Select.Option value="group_1">Group 1</Select.Option>
                    <Select.Option value="group_2">Group 1</Select.Option>
                  </Select>
                </Form.Item>
                <div className="row mb-3">
                  <div class="col-3"></div>
                  <div class="col-9">
                    <ul className="list-icons">
                      <li>
                        <a href="#" onClick={handleSiteSelection}>
                          <strong>Site 1</strong>
                          <span className="align-middle ml-2">
                            <i className="fa fa-pencil-square-o circle text-info"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={handleSiteSelection}>
                          <strong>Site 2</strong>
                          <span className="align-middle ml-2">
                            <i className="fa fa-pencil-square-o text-info"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={handleSiteSelection}>
                          <strong>Site 3</strong>
                          <span className="align-middle ml-2">
                            <i className="fa fa-pencil-square-o text-info"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Form.Item label="Broker" name="broker">
                  <Select>
                    <Select.Option value="broker_1">Broker 1</Select.Option>
                    <Select.Option value="broker_2">Broker 2</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MultiSiteSelectionForm;
