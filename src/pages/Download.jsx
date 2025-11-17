import { useState } from 'react';

const Download = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Replace this URL with your Google Drive direct download link
  const googleDriveDownloadUrl = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';

  const handleDownload = () => {
    setIsDownloading(true);
    // Open download link in new tab
    window.open(googleDriveDownloadUrl, '_blank');
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Download Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-6">
              <svg 
                className="w-24 h-24 mx-auto text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Download Padma
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Get the Padma app and start making a difference in your community today.
            </p>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download APK
              </>
            )}
          </button>

          <p className="text-sm text-emerald-200 mt-6">
            Version 1.0.0 • Android 5.0+
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
          App Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with local projects and see real-time impact in your community.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Track your projects, milestones, and achievements all in one place.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Network & Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Join a network of changemakers and collaborate on impactful initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="bg-white max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 rounded-3xl shadow-lg mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          Installation Instructions
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Download the APK</h3>
              <p className="text-gray-600 leading-relaxed">
                Click the download button above to get the Padma APK file from Google Drive.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enable Unknown Sources</h3>
              <p className="text-gray-600 leading-relaxed">
                Go to Settings → Security → Enable "Install from Unknown Sources" on your Android device.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Install the App</h3>
              <p className="text-gray-600 leading-relaxed">
                Open the downloaded APK file and follow the installation prompts to complete the setup.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-emerald-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">Safe & Secure</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Padma APK is verified and safe to install. We ensure your data security and privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;

