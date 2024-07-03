import React from 'react';
import { Link } from "react-router-dom";

export const Users = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => {
                setData(users);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <Link key={item.id} to={`/users/${item.id}`} className="block p-4 border rounded-lg hover:bg-blue-600">
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p>{item.email}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

