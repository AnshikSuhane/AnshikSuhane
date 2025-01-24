const Stat = () => {
    return (
      <div id="stats" className="stat-page bg-gray-100 min-h-screen p-6">
        {/* Calendar Section */}
        <div className="calendar-section bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            My GitHub Calendar
          </h2>
          <div className="calendar flex justify-center items-center mb-4">
            <img
              src="/git2.png"
              alt="GitHub Calendar"
              className="calendar-image w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
          <div className="calendar-info grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <strong className="text-gray-700">Contributions in the last year</strong>
              <p className="text-lg text-blue-600">82 total</p>
            </div>
            <div>
              <strong className="text-gray-700">Longest streak</strong>
              <p className="text-lg text-green-600">52 days</p>
            </div>
            <div>
              <strong className="text-gray-700">Current streak</strong>
              <p className="text-lg text-purple-600">13 days</p>
            </div>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="stats-section bg-white shadow-md rounded-lg p-6">
          <div className="stat-card flex justify-center items-center">
            <img
              src="/git1.png"
              alt="GitHub Stats"
              className="stat-image w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Stat;
  