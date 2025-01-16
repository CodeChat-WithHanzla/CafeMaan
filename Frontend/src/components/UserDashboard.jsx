import React from 'react'

function UserDashboard() {
    const mockUsers = [
        {
            email: "john.doe@example.com",
            name: "John Doe",
            phone: "123-456-7890",
            paidItems: 5,
        },
        {
            email: "jane.smith@example.com",
            name: "Jane Smith",
            phone: "987-654-3210",
            paidItems: 2,
        },
        {
            email: "alex.brown@example.com",
            name: "Alex Brown",
            phone: "456-789-0123",
            paidItems: 3,
        },
    ];
    return (
        <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <table className="table-auto w-full text-left border-collapse border border-gray-600">
                <thead>
                    <tr>
                        <th className="border border-gray-600 p-2">Email</th>
                        <th className="border border-gray-600 p-2">Name</th>
                        <th className="border border-gray-600 p-2">Phone Number</th>
                        <th className="border border-gray-600 p-2">Paid Items</th>
                    </tr>
                </thead>
                <tbody>
                    {mockUsers.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-700">
                            <td className="border border-gray-600 p-2">{user.email}</td>
                            <td className="border border-gray-600 p-2">{user.name}</td>
                            <td className="border border-gray-600 p-2">{user.phone}</td>
                            <td className="border border-gray-600 p-2">{user.paidItems}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserDashboard