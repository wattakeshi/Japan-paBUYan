export const FinanceStats = ({ data }) => {
    const stats = data.reduce((acc, wishlist) => {
        wishlist.requestedProducts.forEach(p => {
            acc.totalSales += (p.salePrice || 0) * (p.qty || 1);
            acc.totalCost += (p.costPrice || 0) * (p.qty || 1);
        });
        return acc;
    }, { totalSales: 0, totalCost: 0 });

    const profit = stats.totalSales - stats.totalCost;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <p className="text-gray-500 text-sm">Total Sales</p>
                <h2 className="text-2xl font-bold"> ¥{stats.totalSales} </h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                <p className="text-gray-500 text-sm">Cost JPY</p>
                <h2 className="text-2xl font-bold">R$ {stats.totalCost}</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                <p className="text-gray-500 text-sm">Profit JPY</p>
                <h2 className="text-2xl font-bold text-green-600">R$ {profit}</h2>
            </div>
        </div>
    );
};