import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Channels</h2>
      </header>
      <div className="p-3">

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Visitors</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-slate-100">


              {scopes && scopes.map(scope => (
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800">{scope.advertiser}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{scope.conversion}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-green-500">{scope.revenues}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{scope.sales}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{scope.visitors}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;


const scopes = [
  {
    advertiser: 'Facebook',
    visitors: '2.4K',
    revenues: '$3,877',
    sales: '267',
    conversion: '4.7%',
  },
  {
    advertiser: 'Twitter',
    visitors: '2.2K',
    revenues: '$3,426',
    sales: '249',
    conversion: '4.4%',
  },
  {
    advertiser: 'Google',
    visitors: '2.0K',
    revenues: '$2,444',
    sales: '224',
    conversion: '4.2%',
  },
  {
    advertiser: 'TikTok',
    visitors: '1.9K',
    revenues: '$2,236',
    sales: '220',
    conversion: '4.2%',
  },
  {
    advertiser: 'Youtube',
    visitors: '1.7K',
    revenues: '$2,034',
    sales: '204',
    conversion: '3.9%',
  },
  {
    advertiser: 'Instagram',
    visitors: '1.6K',
    revenues: '$1,877',
    sales: '189',
    conversion: '3.7%',
  },
  {
    advertiser: 'Linkedin',
    visitors: '1.5K',
    revenues: '$1,726',
    sales: '175',
    conversion: '3.5%',
  },
  {
    advertiser: 'Pinterest',
    visitors: '1.4K',
    revenues: '$1,624',
    sales: '162',
    conversion: '3.4%',
  },
  {
    advertiser: 'Reddit',
    visitors: '1.3K',
    revenues: '$1,524',
    sales: '152',
    conversion: '3.2%',
  },
  {
    advertiser: 'Snapchat',
    visitors: '1.2K',
    revenues: '$1,424',
    sales: '142',
    conversion: '3.1%',
  },
];
