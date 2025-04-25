export default function RfqFormContent() {
  return (
    <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <div className="flex justify-between mb-4">
            <h2 className="card-title">New RFQ</h2>
            <div className="flex gap-2">
              <button className="btn btn-ghost">
                Cancel
              </button>
              <button className="btn btn-primary">
                Save RFQ
              </button>
            </div>
          </div>
          
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">RFQ ID</span>
                </label>
                <input type="text" placeholder="Auto-generated" className="input input-bordered w-full" readOnly />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Client</span>
                  <span className="label-text-alt text-error">Required</span>
                </label>
                <select className="select select-bordered w-full" required>
                  <option value="">Select Client</option>
                  <option value="acme">Acme Corp</option>
                  <option value="globex">Globex Inc</option>
                  <option value="initech">Initech</option>
                  <option value="umbrella">Umbrella Corp</option>
                </select>
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Contact Person</span>
                </label>
                <input type="text" placeholder="Contact name" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Contact email" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="tel" placeholder="Contact phone" className="input input-bordered w-full" />
              </div>
            </div>
            
            <div className="divider">Product Information</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product</span>
                  <span className="label-text-alt text-error">Required</span>
                </label>
                <select className="select select-bordered w-full" required>
                  <option value="">Select Product</option>
                  <option value="widget-a">Widget A</option>
                  <option value="widget-b">Widget B</option>
                  <option value="widget-c">Widget C</option>
                  <option value="widget-d">Widget D</option>
                </select>
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Quantity</span>
                  <span className="label-text-alt text-error">Required</span>
                </label>
                <input type="number" placeholder="Enter quantity" className="input input-bordered w-full" required />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Unit Price</span>
                </label>
                <input type="number" placeholder="Price per unit" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Total Value</span>
                </label>
                <input type="number" placeholder="Auto-calculated" className="input input-bordered w-full" readOnly />
              </div>
              
              <div className="form-control w-full md:col-span-2">
                <label className="label">
                  <span className="label-text">Special Requirements</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Enter any special requirements or notes"></textarea>
              </div>
            </div>
            
            <div className="divider">Status</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select className="select select-bordered w-full">
                  <option value="open">Open</option>
                  <option value="pending">Pending</option>
                  <option value="closed">Closed</option>
                  <option value="rejected">Rejected</option>
                  <option value="in-progress">In Progress</option>
                </select>
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select className="select select-bordered w-full">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              
              <div className="form-control w-full md:col-span-2">
                <label className="label">
                  <span className="label-text">Internal Notes</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Enter internal notes (not visible to client)"></textarea>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <button type="button" className="btn btn-ghost">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save RFQ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 