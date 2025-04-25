"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';

// Mock data for an RFQ
const mockRfqData = {
  id: 'RFQ-2023-001',
  clientName: 'Acme Corporation',
  status: 'Pending Review',
  dateReceived: '2023-10-15',
  items: [
    { id: 1, name: 'High-performance server', quantity: 5, unit: 'unit', notes: 'Must be rack-mountable', hasMatch: true, suggestedPrice: 2500 },
    { id: 2, name: 'Network switches', quantity: 10, unit: 'unit', notes: '', hasMatch: false, suggestedPrice: null },
    { id: 3, name: 'UPS systems', quantity: 2, unit: 'unit', notes: 'Minimum 2000VA', hasMatch: true, suggestedPrice: 1200 },
    { id: 4, name: 'Fiber optic cables', quantity: 50, unit: 'meter', notes: 'OM4 multi-mode', hasMatch: false, suggestedPrice: null },
  ]
};

export default function RfqQuotePage({ params }: { params: { id: string } }) {
  // Use mock data for now, later will fetch based on params.id
  const [rfqData, setRfqData] = useState(mockRfqData);
  const [quoteItems, setQuoteItems] = useState<Array<any>>([]);
  const [quoteTotal, setQuoteTotal] = useState<number>(0);

  // Initialize quote items with RFQ data
  useEffect(() => {
    const initialItems = rfqData.items.map(item => ({
      ...item,
      price: item.hasMatch ? item.suggestedPrice : null,
    }));
    setQuoteItems(initialItems);
  }, [rfqData]);

  // Calculate quote total whenever items change
  useEffect(() => {
    const total = quoteItems.reduce((sum, item) => {
      return sum + (Number(item.price) || 0) * item.quantity;
    }, 0);
    setQuoteTotal(total);
  }, [quoteItems]);

  // Handle price change for an item
  const handlePriceChange = (id: number, price: string) => {
    setQuoteItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, price: parseFloat(price) || null } : item
      )
    );
  };

  // Simulate requesting price from vendor
  const requestPriceFromVendor = (id: number) => {
    // In a real app, this would trigger a workflow or send an email
    alert(`Price request for item ${id} will be sent to vendors`);
  };
  
  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar 
            title={`Generate Quote for RFQ: ${params.id}`}
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'RFQ Listing', href: '/rfq-listing' },
              { label: `RFQ ${params.id}`, href: `/rfq/${params.id}` },
              { label: 'Generate Quote' }
            ]}
            actions={[
              {
                label: 'Save Draft',
                variant: 'default'
              },
              {
                label: 'Send Quote',
                variant: 'primary'
              }
            ]}
          />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0 p-4 gap-4 overflow-auto">
            {/* RFQ Info Summary */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title mb-4">RFQ Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">RFQ ID</p>
                    <p className="font-medium">{rfqData.id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Client Name</p>
                    <p>{rfqData.clientName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <span className="badge badge-warning">{rfqData.status}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date Received</p>
                    <p>{rfqData.dateReceived}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Item Table */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title mb-4">Quote Items</h2>
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Price ($)</th>
                        <th>Total</th>
                        <th>Notes</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quoteItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.unit}</td>
                          <td>
                            <input
                              type="number"
                              className="input input-bordered input-sm w-24"
                              value={item.price || ''}
                              onChange={(e) => handlePriceChange(item.id, e.target.value)}
                              placeholder="Enter price"
                            />
                          </td>
                          <td>
                            ${item.price ? (item.price * item.quantity).toFixed(2) : '-'}
                          </td>
                          <td>
                            <span className="text-sm">{item.notes}</span>
                          </td>
                          <td>
                            {item.hasMatch ? (
                              <span className="badge badge-success badge-sm">Price Matched</span>
                            ) : (
                              <button 
                                className="btn btn-xs btn-outline"
                                onClick={() => requestPriceFromVendor(item.id)}
                              >
                                Request Price
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Summary & Actions Section */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title mb-4">Quote Summary</h2>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Quote Total</p>
                    <p className="text-2xl font-bold">${quoteTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-outline">
                      Save Draft Quote
                    </button>
                    <Link href={`/rfq/${params.id}/quote/preview`} className="btn btn-primary">
                      Preview Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 