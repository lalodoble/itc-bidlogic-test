"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';

// Mock data for an RFQ
const mockRfqData = {
  id: 'RFQ-2023-001',
  clientName: 'Acme Corporation',
  clientAddress: '123 Tech Way, San Francisco, CA 94107',
  clientEmail: 'procurement@acmecorp.com',
  clientPhone: '+1 (555) 123-4567',
  status: 'Pending Review',
  dateReceived: '2023-10-15',
  quoteId: 'QT-2023-001',
  quoteDate: new Date().toISOString().split('T')[0],
  expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
  items: [
    { id: 1, name: 'High-performance server', quantity: 5, unit: 'unit', notes: 'Must be rack-mountable', price: 2500 },
    { id: 2, name: 'Network switches', quantity: 10, unit: 'unit', notes: '', price: 850 },
    { id: 3, name: 'UPS systems', quantity: 2, unit: 'unit', notes: 'Minimum 2000VA', price: 1200 },
    { id: 4, name: 'Fiber optic cables', quantity: 50, unit: 'meter', notes: 'OM4 multi-mode', price: 12 },
  ]
};

export default function QuotePreviewPage({ params }: { params: { id: string } }) {
  // Use mock data for now, later will fetch based on params.id
  const [quoteData, setQuoteData] = useState(mockRfqData);
  const [quoteTotal, setQuoteTotal] = useState<number>(0);

  // Calculate quote total on initial load
  useEffect(() => {
    const total = quoteData.items.reduce((sum, item) => {
      return sum + (Number(item.price) || 0) * item.quantity;
    }, 0);
    setQuoteTotal(total);
  }, [quoteData]);
  
  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar 
            title={`Preview Quote for RFQ: ${params.id}`}
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'RFQ Listing', href: '/rfq-listing' },
              { label: `RFQ ${params.id}`, href: `/rfq/${params.id}` },
              { label: 'Quote', href: `/rfq/${params.id}/quote` },
              { label: 'Preview' }
            ]}
            actions={[
              {
                label: 'Back to Editor',
                variant: 'default'
              },
              {
                label: 'Send Quote',
                variant: 'primary'
              }
            ]}
          />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0 p-4 gap-4 overflow-auto">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold">BidLogic</h2>
                    <p className="text-sm text-gray-500">123 Business Avenue</p>
                    <p className="text-sm text-gray-500">New York, NY 10001</p>
                    <p className="text-sm text-gray-500">sales@bidlogic.com</p>
                    <p className="text-sm text-gray-500">(555) 987-6543</p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-2xl font-bold">QUOTE</h1>
                    <p className="text-gray-700">#{quoteData.quoteId}</p>
                    <p className="mt-2 text-sm text-gray-500">Date: {quoteData.quoteDate}</p>
                    <p className="text-sm text-gray-500">Valid Until: {quoteData.expiryDate}</p>
                  </div>
                </div>

                <div className="divider"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Quote To:</h3>
                    <p className="font-bold">{quoteData.clientName}</p>
                    <p>{quoteData.clientAddress}</p>
                    <p>{quoteData.clientEmail}</p>
                    <p>{quoteData.clientPhone}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">RFQ Details:</h3>
                    <p><span className="font-medium">RFQ ID:</span> {quoteData.id}</p>
                    <p><span className="font-medium">Date Received:</span> {quoteData.dateReceived}</p>
                    <p><span className="font-medium">Status:</span> {quoteData.status}</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr className="bg-base-200">
                        <th>Item</th>
                        <th>Description</th>
                        <th className="text-right">Quantity</th>
                        <th className="text-right">Unit Price</th>
                        <th className="text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quoteData.items.map((item) => (
                        <tr key={item.id}>
                          <td className="font-medium">{item.name}</td>
                          <td>{item.notes || 'Standard specifications'}</td>
                          <td className="text-right">{item.quantity} {item.unit}</td>
                          <td className="text-right">${Number(item.price).toFixed(2)}</td>
                          <td className="text-right">${(item.quantity * Number(item.price)).toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2">
                        <td colSpan={4} className="text-right font-medium">Subtotal:</td>
                        <td className="text-right">${quoteTotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td colSpan={4} className="text-right font-medium">Tax (0%):</td>
                        <td className="text-right">$0.00</td>
                      </tr>
                      <tr className="border-t-2">
                        <td colSpan={4} className="text-right font-bold">Total:</td>
                        <td className="text-right font-bold">${quoteTotal.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-2">Terms and Conditions:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>This quote is valid for 30 days from the date of issue.</li>
                    <li>Payment terms: 50% advance, 50% upon delivery.</li>
                    <li>Delivery timeline: 2-3 weeks after order confirmation.</li>
                    <li>Prices do not include installation unless specified.</li>
                    <li>Warranty as per manufacturer's standard terms.</li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500">Thank you for your business!</p>
                </div>
                
                <div className="flex justify-end mt-6 gap-2">
                  <Link href={`/rfq/${params.id}/quote`} className="btn btn-outline">
                    Back to Editor
                  </Link>
                  <button className="btn btn-primary">
                    Send Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 