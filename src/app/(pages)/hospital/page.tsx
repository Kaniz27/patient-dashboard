"use client";

import React from "react";
import { Table, TableProps, Tag } from "antd";
import { EnvironmentOutlined, BankOutlined } from "@ant-design/icons";
import { Hospital, hospitalList } from "@/data/hospitallist"; // path ঠিক করো

const columns: TableProps<Hospital>["columns"] = [
  {
    title: "Hospital",
    dataIndex: "name",
    key: "name",
    render: (name) => (
      <div className="flex gap-2">
        <BankOutlined className="text-blue-600" />
        <span className="font-semibold">{name}</span>
      </div>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    render: (location) => (
      <div className="flex items-center gap-2 text-gray-600">
        <EnvironmentOutlined className="text-red-500" />
        <span>{location}</span>
      </div>
    ),
  },
  {
    title: "Specialty",
    dataIndex: "specialty",
    key: "specialty",
    render: (specialty) => (
      <Tag color="blue">{specialty}</Tag>
    ),
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
    render: (contact) => (
      <span className="font-medium">☎ {contact}</span>
    ),
  },
];

const HospitalListTable = () => {
  return (
    <div className="p-6  bg-white rounded-xl shadow">
      <h2 className="text-[22px] font-semibold mb-4">
        Hospital List
      </h2>

      <Table<Hospital>
        rowKey="id"
        columns={columns}
        dataSource={hospitalList}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default HospitalListTable;
