import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import DashboardContent from '@/components/dashboard/DashboardContent';

export default function HomePage() {
  return (
    <div className="size-full" id="layout-main">
      <div className="flex">
        <Sidebar />

        <div className="flex h-screen min-w-0 grow flex-col">
          <Topbar 
            title="Dashboard"
            actions={[
              {
                label: "New",
                icon: "uil-plus",
                variant: "success",
                href: "./form.html"
              },
              {
                label: "Download",
                icon: "uil-download",
                dropdown: {
                  items: [
                    { label: "Download as JSON" },
                    { label: "Download as CSV" }
                  ]
                }
              },
              {
                label: "Import",
                icon: "uil-file-import",
                // onClick: () => console.log("Import clicked")
              }
            ]}
          />
          
          <div id="layout-content" className="flex-1 flex flex-col min-h-0">
            <DashboardContent />
          </div>
          
          {/* Pagination */}
          <div className="px-4 py-2 border-t border-base-300">
            <div className="flex items-center justify-between">
              <div className="text-sm text-base-content/60">Showing 1 to 10 of 100 entries</div>
              <div className="join">
                <button className="join-item btn btn-sm">Previous</button>
                <button className="join-item btn btn-sm btn-active">1</button>
                <button className="join-item btn btn-sm">2</button>
                <button className="join-item btn btn-sm">3</button>
                <button className="join-item btn btn-sm">Next</button>
              </div>
            </div>
          </div>
          
          {/* Bulk Actions */}
          <div className="p-4 border-t border-base-300 bg-base-100">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Bulk Actions:</span>
              <button className="btn btn-sm">Delete</button>
              <button className="btn btn-sm">Export</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 