"use client";

import { useState } from 'react';
import Link from 'next/link';

// Mock data for Quotes
const mockQuotes = [
  {
    id: 'QT-2023-001',
    rfqId: 'RFQ-2023-001',
    clientName: 'Acme Corp',
    dateCreated: '2023-10-18',
    status: 'Sent',
    totalAmount: '$15,750'
  },
  {
    id: 'QT-2023-002',
    rfqId: 'RFQ-2023-002',
    clientName: 'Globex Inc',
    dateCreated: '2023-10-15',
    status: 'Draft',
    totalAmount: '$9,200'
  },
  {
    id: 'QT-2023-003',
    rfqId: 'RFQ-2023-003',
    clientName: 'Initech',
    dateCreated: '2023-10-12',
    status: 'Converted',
    totalAmount: '$12,980'
  },
  {
    id: 'QT-2023-004',
    rfqId: 'RFQ-2023-004',
    clientName: 'Umbrella Corp',
    dateCreated: '2023-10-10',
    status: 'Draft',
    totalAmount: '$24,500'
  },
  {
    id: 'QT-2023-005',
    rfqId: 'RFQ-2023-005',
    clientName: 'Wayne Enterprises',
    dateCreated: '2023-10-08',
    status: 'Sent',
    totalAmount: '$10,350'
  },
  {
    id: 'QT-2023-006',
    rfqId: 'RFQ-2023-006',
    clientName: 'Stark Industries',
    dateCreated: '2023-10-05',
    status: 'Converted',
    totalAmount: '$47,200'
  },
  {
    id: 'QT-2023-007',
    rfqId: 'RFQ-2023-007',
    clientName: 'LexCorp',
    dateCreated: '2023-10-03',
    status: 'Sent',
    totalAmount: '$18,750'
  }
];

export default function QuotesListingContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Filter logic
  const filteredQuotes = mockQuotes.filter(quote => {
    // Search term filter
    const matchesSearch = searchTerm === '' || 
      quote.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter
    const matchesStatus = statusFilter === '' || quote.status === statusFilter;
    
    // Date filtering could be implemented here
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Search Quotes</span>
          </label>
          <input 
            type="text" 
            placeholder="Search by Quote ID or client name..." 
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
                <th>Quote ID</th>
                <th>RFQ ID</th>
                <th>Client Name</th>
                <th>Date Created</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuotes.map((quote) => (
                <tr key={quote.id}>
                  <td>{quote.id}</td>
                  <td>
                    <Link href={`/rfq/${quote.rfqId}`} className="link link-hover text-primary">
                      {quote.rfqId}
                    </Link>
                  </td>
                  <td>{quote.clientName}</td>
                  <td>{quote.dateCreated}</td>
                  <td>
                    <span className={`badge ${
                      quote.status === 'Draft' ? 'badge-warning' : 
                      quote.status === 'Sent' ? 'badge-info' : 
                      'badge-success'
                    }`}>
                      {quote.status}
                    </span>
                  </td>
                  <td>{quote.totalAmount}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/rfq/${quote.rfqId}/quote/preview`} className="btn btn-sm">
                        <span className="uil uil-eye"></span>
                        <span className="hidden md:inline ml-1">View</span>
                      </Link>
                      {quote.status !== 'Converted' && (
                        <Link href={`/rfq/${quote.rfqId}/quote`} className="btn btn-sm btn-primary">
                          <span className="uil uil-edit"></span>
                          <span className="hidden md:inline ml-1">Edit</span>
                        </Link>
                      )}
                      <button className="btn btn-sm btn-neutral">
                        <span className="uil uil-file-download"></span>
                        <span className="hidden md:inline ml-1">PDF</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">Showing 1 to {filteredQuotes.length} of {filteredQuotes.length} results</div>
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
} 