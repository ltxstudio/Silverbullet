import { FaDownload } from 'react-icons/fa';

const DownloadButton = () => (
  <a
    href="#"
    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    <div className="flex items-center space-x-2 justify-center">
      <FaDownload size={20} />
      <span className="text-lg font-semibold">Download Now</span>
    </div>
  </a>
);

export default DownloadButton;
