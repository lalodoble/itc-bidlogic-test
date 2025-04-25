import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import Link from 'next/link';

export default function RfqDetailsPage({ params }: { params: { id: string } }) {
  // Mock data for the RFQ
  const rfqData = {
    id: params.id,
    clientName: "Acme Corporation",
    clientEmail: "procurement@acmecorp.com",
    dateReceived: "2023-10-15",
    status: "Pending",
    items: [
      { id: 1, name: "High-performance server", quantity: 5, unit: "unit", notes: "Must be rack-mountable", hasPricing: true },
      { id: 2, name: "Network switches", quantity: 10, unit: "unit", notes: "", hasPricing: false },
      { id: 3, name: "UPS systems", quantity: 2, unit: "unit", notes: "Minimum 2000VA", hasPricing: true },
      { id: 4, name: "Fiber optic cables", quantity: 50, unit: "meter", notes: "OM4 multi-mode", hasPricing: false },
    ],
    originalMessage: "Hello, we are looking to upgrade our data center infrastructure and would like to request a quote for the items listed in the attached spreadsheet. Please provide pricing and availability at your earliest convenience. Regards, John Smith, Procurement Manager, Acme Corporation",
    attachments: ["rfq-items-list.xlsx", "data-center-specs.pdf"]
  };

  // Function to determine the status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'badge-warning';
      case 'In Progress': return 'badge-info';
      case 'Completed': return 'badge-success';
      default: return 'badge-ghost';
    }
  };

  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar 
            title={`RFQ Details: ${params.id}`}
            breadcrumbs={[
              { label: 'RFQ Listing', href: '/rfq' },
              { label: `RFQ ${params.id}` }
            ]}
            actions={[
              {
                label: 'Continue Quote',
                href: `/rfq/${params.id}/quote`,
                variant: 'primary'
              },
              {
                label: 'Mark as Converted',
                variant: 'success'
              },
              {
                label: 'Discard RFQ',
              }
            ]}
          />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0 p-4 overflow-auto">
            
            {/* RFQ Overview Section */}
            <div className="card bg-base-100 shadow-md mb-4">
              <div className="card-body">
                <h2 className="card-title">RFQ Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm font-semibold">RFQ ID</p>
                    <p>{rfqData.id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Client Name</p>
                    <p>{rfqData.clientName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Client Email</p>
                    <p>{rfqData.clientEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Date Received</p>
                    <p>{rfqData.dateReceived}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Status</p>
                    <div className={`badge ${getStatusBadgeColor(rfqData.status)}`}>{rfqData.status}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* RFQ Items Table */}
            <div className="card bg-base-100 shadow-md mb-4">
              <div className="card-body">
                <h2 className="card-title">RFQ Items</h2>
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Notes</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rfqData.items.map(item => (
                        <tr key={item.id} className={!item.hasPricing ? "bg-warning bg-opacity-10" : ""}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.unit}</td>
                          <td>{item.notes}</td>
                          <td>
                            {!item.hasPricing ? (
                              <span className="badge badge-warning">Missing Pricing</span>
                            ) : (
                              <span className="badge badge-success">Pricing Available</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Additional Details */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Additional Details</h2>
                
                {/* Original Message */}
                <div className="mt-2">
                  <h3 className="font-semibold mb-2">Original Message</h3>
                  <div className="p-4 bg-base-200 rounded-lg">
                    <p className="whitespace-pre-line">{rfqData.originalMessage}</p>
                  </div>
                </div>
                
                {/* Attachments */}
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Attachments</h3>
                  <div className="flex flex-wrap gap-2">
                    {rfqData.attachments.map((file, index) => (
                      <div key={index} className="flex items-center p-2 border rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{file}</span>
                      </div>
                    ))}
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