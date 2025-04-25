import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import RfqListingContent from '@/components/rfq/RfqListingContent';

export default function RfqListingPage() {
  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar 
            title="RFQ Listing"
            // breadcrumbs={[
            //   { label: 'Home', href: '/' },
            //   { label: 'RFQ Listing' }
            // ]}
            actions={[
              {
                label: 'New RFQ',
                icon: 'uil-plus',
                href: '/rfq/new',
                variant: 'primary'
              }
            ]}
          />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0">
            <RfqListingContent />
          </div>
        </div>
      </div>
    </div>
  );
} 