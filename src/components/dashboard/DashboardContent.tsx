"use client";

import { useEffect } from 'react';

export default function DashboardContent() {
  useEffect(() => {
    // Initialize charts or any dashboard-specific functionality here
    // This is where we would initialize ApexCharts
    if (typeof window !== 'undefined') {
      const ApexCharts = require('apexcharts');
      // Initialize your charts with ApexCharts if needed
    }
  }, []);

  return (
    <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Total RFQs</h2>
            <p className="text-3xl font-bold">128</p>
            <p className="text-sm text-success">+12% from last month</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Open RFQs</h2>
            <p className="text-3xl font-bold">42</p>
            <p className="text-sm text-warning">-5% from last month</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Closed RFQs</h2>
            <p className="text-3xl font-bold">86</p>
            <p className="text-sm text-success">+18% from last month</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Conversion Rate</h2>
            <p className="text-3xl font-bold">67%</p>
            <p className="text-sm text-success">+3% from last month</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Monthly RFQs</h2>
            <div id="monthly-rfqs-chart" className="h-80"></div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">RFQ Status</h2>
            <div id="rfq-status-chart" className="h-80"></div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Recent RFQs</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RFQ-2023-001</td>
                  <td>Acme Corp</td>
                  <td><span className="badge badge-success">Closed</span></td>
                  <td>2023-10-15</td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <td>RFQ-2023-002</td>
                  <td>Globex Inc</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>2023-10-12</td>
                  <td>$8,500</td>
                </tr>
                <tr>
                  <td>RFQ-2023-003</td>
                  <td>Initech</td>
                  <td><span className="badge badge-error">Rejected</span></td>
                  <td>2023-10-10</td>
                  <td>$12,300</td>
                </tr>
                <tr>
                  <td>RFQ-2023-004</td>
                  <td>Umbrella Corp</td>
                  <td><span className="badge badge-info">In Progress</span></td>
                  <td>2023-10-08</td>
                  <td>$23,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 