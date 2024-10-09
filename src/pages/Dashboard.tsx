import React from 'react'
import { DollarSign, PieChart, Target } from 'lucide-react'

const DashboardHome: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[rgb(51,52,68)] p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <DollarSign className="text-dark-accent mr-2" />
            <h2 className="text-xl font-semibold">Total Balance</h2>
          </div>
          <p className="text-3xl font-bold text-dark-primary">$5,000.00</p>
        </div>
        <div className="bg-[rgb(51,52,68)] p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <PieChart className="text-dark-secondary mr-2" />
            <h2 className="text-xl font-semibold">Monthly Spending</h2>
          </div>
          <p className="text-3xl font-bold text-dark-secondary">$1,200.00</p>
        </div>
        <div className="bg-[rgb(51,52,68)] p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Target className="text-dark-primary mr-2" />
            <h2 className="text-xl font-semibold">Goals Progress</h2>
          </div>
          <p className="text-3xl font-bold text-dark-primary">2/5 Completed</p>
        </div>
      </div>
      <div className="bg-[rgb(51,52,68)] rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold p-4 bg-[rgb(41,42,58)]">Recent Transactions</h2>
        <table className="w-full">
          <thead className="bg-[rgb(41,42,58)]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#332]">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2023-04-15</td>
              <td className="px-6 py-4">Grocery Shopping</td>
              <td className="px-6 py-4">$150.00</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2023-04-14</td>
              <td className="px-6 py-4">Gas Station</td>
              <td className="px-6 py-4">$45.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DashboardHome