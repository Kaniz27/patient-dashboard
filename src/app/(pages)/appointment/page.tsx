"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input, Space, Table, TableProps, Tag, Modal, Button } from "antd";
import { medicalHistoryData, MedicalHistoryItem } from "@/data/patienthistory";

const { Search } = Input;

/* ---------------- Status Colors ---------------- */
const statusColors: Record<string, string> = {
  Pending: "orange",
  Completed: "green",
  Withdraw: "red",
};

const MedicalHistoryTable = () => {
  const [data, setData] = useState<MedicalHistoryItem[]>(medicalHistoryData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<MedicalHistoryItem | null>(null);
  const router = useRouter();

  /* ---------------- Search ---------------- */
  const onSearch = (value: string) => {
    const filtered = medicalHistoryData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  };

  /* ---------------- Open Report Modal ---------------- */
  const openReportModal = (record: MedicalHistoryItem) => {
    setSelectedPatient(record);
    setIsModalOpen(true);
  };

  /* ---------------- Navigate to Prescription ---------------- */
  const navigateToPrescription = (record: MedicalHistoryItem) => {
    router.push(`/create-prescription/${record.id}`);
  };

  /* ---------------- Table Columns ---------------- */
  const columns: TableProps<MedicalHistoryItem>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Space>
          <Image
            src={record.avatar}
            alt={record.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{record.name}</span>
        </Space>
      ),
    },
    {
      title: "Problems",
      dataIndex: "problems",
      key: "problems",
    },
    
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Hospital",
      dataIndex: "hospital",
      key: "hospital",
    },
    {
      title: "Prescription / Report",
      key: "pr",
      render: (_, record) => (
        <Space>
          <Tag
            color="green"
            className="cursor-pointer"
            onClick={() => navigateToPrescription(record)}
          >
            Create Prescription
          </Tag>
          <Tag
            color="blue"
            className="cursor-pointer"
            onClick={() => openReportModal(record)}
          >
            Report
          </Tag>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6  bg-white rounded-xl shadow">
      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-semibold">Today’s Patient</h2>

        <Search
          placeholder="Search patient name"
          allowClear
          onSearch={onSearch}
          style={{ width: 260 }}
        />
      </div>

      {/* 🔹 Table */}
      <Table<MedicalHistoryItem>
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
      />

      {/* 🔹 Report Modal */}
      <Modal
        title="Generate Medical Report"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button key="generate" type="primary">
            Generate Report
          </Button>,
        ]}
      >
        {selectedPatient && (
          <div className="space-y-2">
            <p>
              <strong>Patient:</strong> {selectedPatient.name}
            </p>
            <p>
              <strong>Problem:</strong> {selectedPatient.problems}
            </p>
            <p>
              <strong>Hospital:</strong> {selectedPatient.hospital}
            </p>
            <p>
              <strong>Date:</strong> {selectedPatient.date} at{" "}
              {selectedPatient.time}
            </p>
            <p>
              <strong>Email:</strong> {selectedPatient.email}
            </p>
            <p>
              <strong>Gender:</strong> {selectedPatient.gender}
            </p>
            <p>
              <strong>Age:</strong> {selectedPatient.age}
            </p>
            <p>
              <strong>Address:</strong> {selectedPatient.address}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MedicalHistoryTable;
