export default function FormContent() {
  return (
    <div className="flex-1 overflow-auto p-4 flex flex-col gap-4">
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-4">Form Elements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Text Input</span>
              </label>
              <input type="text" placeholder="Enter text" className="input input-bordered w-full" />
              <label className="label">
                <span className="label-text-alt">Helper text</span>
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Enter email" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter password" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input type="number" placeholder="Enter number" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input type="time" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select</span>
              </label>
              <select className="select select-bordered w-full">
                <option value="" disabled selected>Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Multiselect</span>
              </label>
              <select className="select select-bordered w-full" multiple>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
            </div>

            <div className="form-control w-full md:col-span-2">
              <label className="label">
                <span className="label-text">Textarea</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Enter text here"></textarea>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Checkbox</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Toggle</span>
                <input type="checkbox" className="toggle" />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Radio Buttons</span>
              </label>
              <div className="flex gap-4">
                <label className="label cursor-pointer">
                  <span className="label-text mr-2">Option 1</span>
                  <input type="radio" name="radio-group" className="radio" value="1" />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text mr-2">Option 2</span>
                  <input type="radio" name="radio-group" className="radio" value="2" />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text mr-2">Option 3</span>
                  <input type="radio" name="radio-group" className="radio" value="3" />
                </label>
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Range</span>
              </label>
              <input type="range" min="0" max="100" className="range" />
              <div className="flex justify-between text-xs px-2">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">File Upload</span>
              </label>
              <input type="file" className="file-input file-input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Color Picker</span>
              </label>
              <input type="color" className="w-full h-10" />
            </div>
          </div>

          <div className="divider">Button Styles</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn">Default Button</button>
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn btn-accent">Accent Button</button>
            <button className="btn btn-info">Info Button</button>
            <button className="btn btn-success">Success Button</button>
            <button className="btn btn-warning">Warning Button</button>
            <button className="btn btn-error">Error Button</button>
            <button className="btn btn-ghost">Ghost Button</button>
            <button className="btn btn-link">Link Button</button>
            <button className="btn btn-outline">Outline Button</button>
            <button className="btn btn-disabled">Disabled Button</button>
            <button className="btn btn-sm">Small Button</button>
            <button className="btn">Normal Button</button>
            <button className="btn btn-lg">Large Button</button>
          </div>
        </div>
      </div>
    </div>
  );
} 