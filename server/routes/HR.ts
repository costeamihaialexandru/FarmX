import express, { Request, Response } from 'express';
import Employee from '../models/User';

const router = express.Router();

// API to get employees by role
router.get('/employees/role/:role', async (req: Request, res: Response) => {
    try {
        const { role } = req.params;
        const employees = await Employee.find({ role });
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// API to get employees by department
router.get('/employees/department/:department', async (req: Request, res: Response) => {
    try {
        const { department } = req.params;
        const employees = await Employee.find({ department });
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;