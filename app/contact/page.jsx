export default function Contacts() {
  return (
    <div className=" flex flex-row justify-center align-middle p-8 bg-gray-100 min-h-screen">
      <div className=" p-8 rounded-2xl shadow-lg w-full lg:w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full p-3 bg-white border rounded-xl"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border bg-white rounded-xl"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border bg-white rounded-xl"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              className="w-full p-3 border bg-white rounded-xl"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              className="w-full p-3 border bg-white rounded-xl h-32"
            ></textarea>
          </div>
          <div className="relative">
            <label className="block font-medium mb-1">
              Type of Project <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                required
                className="w-full p-3 pr-10 border rounded-xl appearance-none"
              >
                <option value="">Select a project type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="seo">SEO & Marketing</option>
                <option value="other">Other</option>
              </select>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          <div className="relative">
            <label className="block font-medium mb-1">
              How did you hear about us <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                required
                className="w-full p-3 pr-10 border rounded-xl appearance-none"
              >
                <option value="">Please select</option>
                <option value="Friend/Colleague">Friend/Colleague</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Social Media">Social Media</option>
                <option value="Printed Material">Printed Material</option>
                <option value="Radio">Radio</option>
                <option value="Other">Other</option>
              </select>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Tell us about your project <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Please include any details that would be beneficial for us to
              know.
            </p>
            <textarea
              required
              className="w-full p-3 border rounded-xl h-32"
            ></textarea>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <label className="text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>{' '}
              and Data Protection terms.
            </label>
          </div>
          <button
            type="submit"
            className="w-full hover:bg-blue-800  p-3 rounded-xl bg-blue-500 text-white transition duration-300 ease-in-out font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
