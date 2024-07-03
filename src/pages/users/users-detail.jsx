import React from 'react';
import { useParams } from 'react-router-dom';

export const UsersDetail = () => {
    const { id } = useParams();
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((user) => {
                setUser(user);
            });
    }, [id]);

    if (!user) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Detail</h1>
            <div className="p-4 border rounded-lg">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
                <p>Address: {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            </div>
        </div>
    );
};
