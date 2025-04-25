import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import FormContent from '@/components/form/FormContent';

export default function FormPage() {
  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar title="Form" />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0">
            <FormContent />
          </div>
        </div>
      </div>
    </div>
  );
} 