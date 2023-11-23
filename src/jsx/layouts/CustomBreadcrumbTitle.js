import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const CommonBreadCrumbTitle = (props) => {
  const { breadCrumbs } = props;

  const renderBreadCrumbWithLink = (data, index) => (
    <li className="breadcrumb-item" key={index}>
      <Link to={data?.link || "/dashboard"}>{data?.label || ""}</Link>
    </li>
  );

  const renderBreadCrumb = (data, index) => (
    <li className="breadcrumb-item" key={index}>
      {data?.label || ""}
    </li>
  );

  return breadCrumbs && breadCrumbs?.length >= 1 ? (
    <div className="page-titles p-2 mb-1">
      <ol className="breadcrumb p-0 bg-transparent">
        {breadCrumbs?.map((item, index) =>
          item && item?.link
            ? renderBreadCrumbWithLink(item, index)
            : renderBreadCrumb(item, index)
        )}
      </ol>
    </div>
  ) : null;
};

export default CommonBreadCrumbTitle;
