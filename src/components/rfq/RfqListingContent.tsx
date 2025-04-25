"use client";

import { useState } from 'react';
import Link from 'next/link';

// Mock data for RFQs
const mockRfqs = [
  {
    id: 'RFQ-2023-001',
    clientName: 'Acme Corp',
    dateReceived: '2023-10-15',
    itemsDetected: 12,
    quoteStatus: 'Sent',
    value: '$15,000'
  },
  {
    id: 'RFQ-2023-002',
    clientName: 'Globex Inc',
    dateReceived: '2023-10-12',
    itemsDetected: 8,
    quoteStatus: 'Draft',
    value: '$8,500'
  },
  {
    id: 'RFQ-2023-003',
    clientName: 'Initech',
    dateReceived: '2023-10-10',
    itemsDetected: 5,
    quoteStatus: 'Converted',
    value: '$12,300'
  },
  {
    id: 'RFQ-2023-004',
    clientName: 'Umbrella Corp',
    dateReceived: '2023-10-08',
    itemsDetected: 15,
    quoteStatus: 'Draft',
    value: '$23,000'
  },
  {
    id: 'RFQ-2023-005',
    clientName: 'Wayne Enterprises',
    dateReceived: '2023-10-05',
    itemsDetected: 7,
    quoteStatus: 'Sent',
    value: '$9,200'
  },
  {
    id: 'RFQ-2023-006',
    clientName: 'Stark Industries',
    dateReceived: '2023-10-03',
    itemsDetected: 20,
    quoteStatus: 'Converted',
    value: '$45,000'
  }
];

export default function RfqListingContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Filter logic
  const filteredRfqs = mockRfqs.filter(rfq => {
    // Search term filter
    const matchesSearch = searchTerm === '' || 
      rfq.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rfq.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter
    const matchesStatus = statusFilter === '' || rfq.quoteStatus === statusFilter;
    
    // Date filtering could be added here if needed
    
    return matchesSearch && matchesStatus;
  });

  
  return (
    <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Search RFQs</span>
          </label>
          <input 
            type="text" 
            placeholder="Search by RFQ ID or client name..." 
            className="input input-bordered w-full" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Quote Status</span>
          </label>
          <select 
            className="select select-bordered w-full"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Draft">Draft</option>
            <option value="Sent">Sent</option>
            <option value="Converted">Converted</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">From Date</span>
          </label>
          <input 
            type="date" 
            className="input input-bordered w-full" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">To Date</span>
          </label>
          <input 
            type="date" 
            className="input input-bordered w-full" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>RFQ ID</th>
                <th>Client Name</th>
                <th>Date Received</th>
                <th>Items Detected</th>
                <th>Quote Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRfqs.map((rfq) => (
                <tr key={rfq.id}>
                  <td>{rfq.id}</td>
                  <td>{rfq.clientName}</td>
                  <td>{rfq.dateReceived}</td>
                  <td>{rfq.itemsDetected}</td>
                  <td>
                    <span className={`badge ${
                      rfq.quoteStatus === 'Draft' ? 'badge-warning' : 
                      rfq.quoteStatus === 'Sent' ? 'badge-info' : 
                      'badge-success'
                    }`}>
                      {rfq.quoteStatus}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/rfq/${rfq.id}`} className="btn btn-sm">
                        <span className="uil uil-eye"></span>
                        <span className="hidden md:inline ml-1">View</span>
                      </Link>
                      {rfq.quoteStatus !== 'Converted' && (
                        <Link href={`/rfq/${rfq.id}/edit`} className="btn btn-sm btn-primary">
                          <span className="uil uil-edit"></span>
                          <span className="hidden md:inline ml-1">
                            {rfq.quoteStatus === 'Draft' ? 'Continue Quote' : 'Edit Quote'}
                          </span>
                        </Link>
                      )}
                      {rfq.quoteStatus === 'Sent' && (
                        <button className="btn btn-sm btn-success">
                          <span className="uil uil-check"></span>
                          <span className="hidden md:inline ml-1">Mark Converted</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">Showing 1 to {filteredRfqs.length} of {filteredRfqs.length} results</div>
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    
    </div>
    
  );
} 