import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Înlocuiește cu URL-ul serverului tău

export const getUserDataByRole = async (role: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/employees/role/${role}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getUserDataByDepartment = async (department: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/employees/department/${department}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getDepartments = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/departments`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};