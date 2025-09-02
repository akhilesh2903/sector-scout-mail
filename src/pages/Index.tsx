const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">📈 Stock Email Alerts</h1>
          <p className="text-gray-600 mb-6">Get daily notifications for your favorite stocks</p>
          <div className="space-y-3">
            <div className="text-sm text-gray-500">Coming soon:</div>
            <div className="text-left space-y-2">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Email & Phone Login
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Stock Sector Selection
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Daily Email Alerts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
