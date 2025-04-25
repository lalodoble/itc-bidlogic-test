import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import RfqFormContent from '@/components/rfq/RfqFormContent';

export default function RfqFormPage() {
  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar title="RFQ Form" />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0">
            <RfqFormContent />
          </div>
        </div>
      </div>
    </div>
  );
} 