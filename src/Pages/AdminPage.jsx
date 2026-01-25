import { useState } from 'react';
import { useNavigate } from 'react-router';
export function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://japan-pabuyanbackend2-0.onrender.com/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('pabuyan_admin_token', data.token);
                console.log('JWT:', data.token);
                navigate('/AdminDashboard');
            } else {
                alert(data.error);
            }
        } catch (err) {
            console.error("Error to login!", err);
        }
    };

    return (
        <div className="min-h-screen bg-cor1 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-cor2 p-8 rounded-2xl shadow-2xl border border-cor3/20">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-cor5 mb-2 tracking-tight">
                        PaBUYan <span className="text-cor4 text-lg block">Admin Panel</span>
                    </h1>
                    <p className="text-cor4/60 text-sm">Please enter your credentials to manage orders.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-cor5 text-sm font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-cor1 border border-cor3 rounded-lg text-cor5 focus:outline-none focus:ring-2 focus:ring-cor4 transition-all"
                            placeholder="admin@pabuyan.com"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-cor5 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 bg-cor1 border border-cor3 rounded-lg text-cor5 focus:outline-none focus:ring-2 focus:ring-cor4 transition-all"
                            placeholder="••••••••"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-cor4 hover:bg-cor5 text-cor1 font-bold rounded-lg transition-colors duration-300 shadow-lg active:scale-95"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-cor3 text-xs uppercase tracking-widest"><strong>Secure Access Only</strong></p>
                </div>
            </div>
        </div>
    );
}