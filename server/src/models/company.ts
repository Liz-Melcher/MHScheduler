import db from '../../db/connection';

export async function getAllCompanies() {
  const result = await db.query('SELECT * FROM companies ORDER BY id');
  return result.rows;
}

export async function getCompanyById(id: string) {
  const result = await db.query('SELECT * FROM companies WHERE id = $1', [id]);
  return result.rows[0] || null;
}

export async function createCompany(name: string) {
  const result = await db.query(
    'INSERT INTO companies (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
}

export async function updateCompany(id: string, name: string) {
  const result = await db.query(
    'UPDATE companies SET name = $1 WHERE id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0] || null;
}

export async function deleteCompany(id: string) {
  const result = await db.query(
    'DELETE FROM companies WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0] || null;
}
