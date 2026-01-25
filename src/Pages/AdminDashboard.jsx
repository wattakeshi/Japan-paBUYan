
import { useState, useEffect } from 'react';
import { OrderTable } from '../Components/OrderTable';
import { FinanceStats } from '../Components/FinanceStats';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('pending');
    const [wishlists, setWishlists] = useState([]);
    const [loading, setLoading] = useState(true);

    const colors = {
        bg: 'bg-cor1',
        card: 'bg-white',
        primary: 'text-cor5',
        accent: 'bg-cor4',
        border: 'border-cor3'
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const token = localStorage.getItem('pabuyan_admin_token');
        try {
            const response = await fetch('https://japan-pabuyanbackend2-0.onrender.com/admin/wishlists', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setWishlists(data);
            setLoading(false);
        } catch (err) {
            console.error("Erro ao buscar dados", err);
        }
    };

    const pendingOrders = wishlists.filter(w => w.status === 'pending');
    const pastOrders = wishlists.filter(w => w.status === 'completed');

    return (
        <div className={`min-h-screen ${colors.bg} p-4 md:p-8`}>
            <header className="max-w-7xl mx-auto mb-8">
                <h1 className={`text-3xl font-bold ${colors.primary} mb-6`}>PaBUYan Admin</h1>

                <div className="flex space-x-4 border-b border-gray-200">
                    {['pending', 'past', 'finance'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-4 capitalize transition-all ${activeTab === tab
                                ? `border-b-2 border-cor5 text-cor5 font-bold`
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab === 'finance' ? 'Profits Dashboard ' : `${tab} Orders`}
                        </button>
                    ))}
                </div>
            </header>

            <main className="max-w-7xl mx-auto">
                {loading ? (
                    <p>loading datas...</p>
                ) : (
                    <>
                        {activeTab === 'pending' && <OrderTable data={pendingOrders} refresh={fetchData} />}
                        {activeTab === 'past' && <OrderTable data={pastOrders} refresh={fetchData} />}
                        {activeTab === 'finance' && <FinanceStats data={wishlists} />}
                    </>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard
