import React, { useEffect, useState } from 'react';
import { getUserDataByRole, getUserDataByDepartment, getDepartments } from './Api';
import './HRPage.css';


interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    department: string;
    teamLeaderId?: string;
}

interface Department {
    id: string;
    name: string;
    teamLeaderId: string;
}

interface OrganizationalChartProps {
    director: User;
    departments: Department[];
    users: User[];
}

const OrganizationalChart: React.FC<OrganizationalChartProps> = ({ director, departments, users }) => {
    const [chartData, setChartData] = useState<Record<string, User[]>>({});

    useEffect(() => {
        const generateChartData = () => {
            const data: Record<string, User[]> = {};

            // Group users by department
            departments.forEach((department) => {
                const departmentUsers = users.filter((user) => user.department === department.id);
                data[department.id] = departmentUsers;
            });

            // Set team leaders for each department
            departments.forEach((department) => {
                const teamLeader = users.find((user) => user.id === department.teamLeaderId);
                if (teamLeader) {
                    data[department.id].unshift(teamLeader);
                }
            });

            setChartData(data);
        };

        generateChartData();
    }, [departments, users]);

    return (
        <div>
            <h2>{director.firstName} {director.lastName} - Director</h2>
            {departments.map((department) => (
                <div key={department.id}>
                    <h3>{department.name}</h3>
                    {chartData[department.id]?.map((user) => (
                        <div key={user.id}>
                            <p>{user.firstName} {user.lastName} - {user.role}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// Usage example
const HRPage: React.FC = () => {
    const [director, setDirector] = useState<User | null>(null);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Fetch director data from MongoDB
        getUserDataByRole('director').then((data) => setDirector(data));

        // Fetch departments data from MongoDB
        getDepartments().then((data) => {
            setDepartments(data);

            // Fetch users data from MongoDB for each department
            Promise.all(data.map((department: Department) => getUserDataByDepartment(department.id)))
                .then((usersByDepartment) => {
                    // Flatten the array of arrays into a single array
                    const allUsers = usersByDepartment.flat();
                    setUsers(allUsers);
                });
        });
    }, []);

    if (!director || departments.length === 0 || users.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <OrganizationalChart director={director} departments={departments} users={users} />
        </div>
    );
};

export default HRPage;