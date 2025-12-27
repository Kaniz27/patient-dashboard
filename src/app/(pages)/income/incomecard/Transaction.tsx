"use client";

import React from "react";
import { Table, Tag, Input, Avatar } from "antd";
import Image from "next/image";

interface Transaction {
  key: string;
  avatar: string;
  name: string;
  phone: string;
  purpose: string;
  amount: string;
  category: string;
  time: string;
}

const data: Transaction[] = [
  {
    key: '1',
    avatar: 'https://i.pravatar.cc/150?img=3', 
    name: 'Tonmoy Mahmud',
    phone: '01601528793',
    purpose: 'Paient Fee',
    amount: '$1,2560',
    category: 'Active',
    time: '3:45 pm',
  },
  {
    key: '2',
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Karar Mahmud',
    phone: '01601528792',
    purpose: 'Company commission',
    amount: '$2,500',
    category: 'Pending',
    time: '3:45 pm',
  },
  {
    key: '3',
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Kaisha Kumar',
    phone: '01601528792',
    purpose: 'Test commission',
    amount: '$800',
    category: 'Available',
    time: '3:45 pm',
  },
  {
    key: '4',
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Takla Murad',
    phone: '01601528792',
    purpose: 'Referable commission',
    amount: '$150',
    category: 'Available',
    time: '3:45 pm',
  },
];

const TransactionsTable = () => {
  const columns = [
    {
      title: 'Name & Phone',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: Transaction) => (
        <div className="flex items-center gap-3">
          <Avatar size={40} src={record.avatar} />
          <div className="flex flex-col">
            <p className="font-semibold">{record.name}</p>
            <p className="text-gray-500 text-sm">{record.phone}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Purpose',
      dataIndex: 'purpose',
      key: 'purpose',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => {
        let color = 'green';
        if (category === 'Pending') color = 'orange';
        if (category === 'Active') color = 'blue';
        return <Tag color={color}>{category}</Tag>;
      },
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
  ];

  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <Input.Search placeholder="Search transactions" style={{ width: 200 }} />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
      />
    </div>
  );
};

export default TransactionsTable;
