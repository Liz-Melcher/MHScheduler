import { Router, Request, Response } from 'express';
import {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} from '../models/company'; // adjust path if your folders are different

const router = Router();

// GET all companies
router.get('/', async (req: Request, res: Response) => {
  try {
    const companies = await getAllCompanies();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// GET one company by ID
router.get('/:id', async (req: Request<{ id: string }, {}, {}, {}>, res: Response) => {
  const { id } = req.params;
  try {
    const company = await getCompanyById(id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch company' });
  }
});

// CREATE a new company
router.post('/', async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newCompany = await createCompany(name);
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create company' });
  }
});

// UPDATE an existing company
router.put('/:id', async (req: Request<{ id: string }, {}, {}, {}>, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updated = await updateCompany(id, name);
    if (!updated) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update company' });
  }
});

// DELETE a company
router.delete('/:id', async (req: Request<{ id: string }, {}, {}, {}>, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await deleteCompany(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json({ message: 'Company deleted', deleted });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete company' });
  }
});

export default router;
