import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import QuotesListingContent from '@/components/quotes/QuotesListingContent';

export default function QuotesListingPage() {
  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar 
            title="Quotes"
            actions={[]}
          />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0">
            <QuotesListingContent />
          </div>
        </div>
      </div>
    </div>
  );
} 