import React from 'react';
import StatsCard from './incomecard/StatsCard';
import UserGraph from './incomecard/UserGraph';
import TransactionsTable from './incomecard/Transaction';

const page = () => {
    return (
        <div>
  <StatsCard></StatsCard>
  <UserGraph></UserGraph>
  <TransactionsTable></TransactionsTable>
        </div>
    );
};

export default page;