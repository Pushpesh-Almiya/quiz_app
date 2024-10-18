import React from 'react';

function ResultTable() {
  return (
    <div className="flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Table */}
        <table className="table-auto w-full text-left text-gray-400">
          <thead className="bg-gray-700 text-gray-300">
            <tr className="table-row">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Attempts</th>
              <th className="px-4 py-2">Earned Points</th>
              <th className="px-4 py-2">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Pushpesh</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">10</td>
              <td className="px-4 py-2 text-green-500">Passed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultTable;
