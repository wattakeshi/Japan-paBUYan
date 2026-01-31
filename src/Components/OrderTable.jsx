import React, { useState } from 'react';

export const OrderTable = ({ data, refresh }) => {
    const [edits, setEdits] = useState({});
    const token = localStorage.getItem("pabuyan_admin_token");

    const handleChange = (prodId, field, value) => {
        setEdits(prev => ({
            ...prev,
            [prodId]: {
                ...prev[prodId],
                [field]: field === 'status' ? value : Number(value)
            }
        }));
    };

    const getStatusClass = (status) => {
        if (status === "pending") return "bg-yellow-500";
        if (status === "checked") return "bg-blue-500";
        if (status === "bought") return "bg-green-500";
        return "bg-gray-500";
    };

    const handleSaveAll = async (wishlist) => {
        const productsToUpdate = wishlist.requestedProducts.filter(p => edits[p.id]);

        if (productsToUpdate.length === 0) {
            alert("No changes detected.");
            return;
        }

        try {
            const promises = productsToUpdate.map(p => {
                const updatedData = {
                    status: edits[p.id].status || p.status,
                    costPrice: edits[p.id].costPrice ?? p.costPrice,
                    salePrice: edits[p.id].salePrice ?? p.salePrice,
                    qty: edits[p.id].qty ?? p.qty
                };

                return fetch(`https://japan-pabuyanbackend2-0.onrender.com/admin/products/${p.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(updatedData),
                });
            });

            await Promise.all(promises);
            alert("Products updated!");
            setEdits({});
            refresh();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSubmitWishlist = async (wishlist) => {
        const allBought = wishlist.requestedProducts.every(p => p.status === 'bought');

        if (!allBought) {
            alert("Wait! All items must be 'Bought' first.");
            return;
        }

        try {
            const res = await fetch(`https://japan-pabuyanbackend2-0.onrender.com/admin/wishlists/${wishlist.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: 'completed' }),
            });

            if (res.ok) {
                alert("Wishlist Finished! ✅");
                refresh();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="space-y-8 p-4">
            {data.map((wishlist) => (
                <div key={wishlist.id} className="bg-white rounded-xl shadow-md border overflow-hidden">
                    <div className="p-4 bg-cor5 text-white flex justify-between items-center">
                        <div>
                            <h2 className="font-bold text-lg">{wishlist.customer.name}</h2>
                            <span className="text-xs bg-orange-500 px-2 py-0.5 rounded uppercase">
                                Status: {wishlist.status}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleSaveAll(wishlist)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-xs transition-all"
                            >
                                💾 SAVE CHANGES
                            </button>
                            <button
                                onClick={() => handleSubmitWishlist(wishlist)}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-xs transition-all"
                            >
                                ✔️ COMPLETE ORDER
                            </button>
                        </div>
                    </div>

                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 text-gray-600 uppercase text-[10px]">
                            <tr>
                                <th className="p-3 text-left">Product</th>
                                <th className="p-3 text-center">Qty</th>
                                <th className="p-3 text-center">Status</th>
                                <th className="p-3 text-center">Cost (¥)</th>
                                <th className="p-3 text-center">Sale (¥)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist.requestedProducts.map((prod) => (
                                <tr key={prod.id} className="border-b">
                                    <td className="p-3 font-medium">
                                        {prod.name}
                                        <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full text-white uppercase ${getStatusClass(prod.status)}`}>
                                            {prod.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-center">
                                        <input
                                            type="number"
                                            defaultValue={prod.qty}
                                            onChange={(e) => handleChange(prod.id, 'qty', e.target.value)}
                                            className="w-12 border rounded p-1 text-center"
                                        />
                                    </td>
                                    <td className="p-3 text-center">
                                        <select
                                            className={`border-2 rounded p-1 font-bold text-white ${getStatusClass(edits[prod.id]?.status || prod.status)}`}

                                            defaultValue={prod.status}
                                            onChange={(e) => handleChange(prod.id, 'status', e.target.value)}
                                        >
                                            <option value="pending" className="bg-white text-black">Pending</option>
                                            <option value="checked" className="bg-white text-black">Checked</option>
                                            <option value="bought" className="bg-white text-black">Bought</option>
                                        </select>
                                    </td>
                                    <td className="p-3 text-center">
                                        <input
                                            type="number"
                                            defaultValue={prod.costPrice}
                                            onChange={(e) => handleChange(prod.id, 'costPrice', e.target.value)}
                                            className="w-20 border rounded p-1 text-red-500"
                                        />
                                    </td>
                                    <td className="p-3 text-center">
                                        <input
                                            type="number"
                                            defaultValue={prod.salePrice}
                                            onChange={(e) => handleChange(prod.id, 'salePrice', e.target.value)}
                                            className="w-20 border rounded p-1 text-green-600 font-bold"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};