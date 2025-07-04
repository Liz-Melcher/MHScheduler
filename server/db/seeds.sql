-- Clear all existing data (respecting foreign key order)
DELETE FROM appointments;
DELETE FROM providers;
DELETE FROM locations;
DELETE FROM companies;

-- Insert companies
INSERT INTO companies (name) VALUES 
  ('MindPath Health'),
  ('Serenity Psychiatry Group');

-- Insert locations
INSERT INTO locations (company_id, name, address, city, state, zip) VALUES 
  (1, 'MindPath - Downtown Clinic', '123 Main St', 'Los Angeles', 'CA', '90001'),
  (1, 'MindPath - Northside', '456 Elm St', 'Los Angeles', 'CA', '90002'),
  (2, 'Serenity - Midtown', '789 Oak Ave', 'San Francisco', 'CA', '94102');

-- Insert providers
INSERT INTO providers (location_id, full_name, specialty, credentials) VALUES 
  (1, 'Dr. Alice Walker', 'Adult Psychiatry', 'MD'),
  (1, 'Dr. Michael Chan', 'Child Psychiatry', 'DO'),
  (2, 'Nurse Jamie Lee', 'Family Psychiatry', 'NP'),
  (3, 'Dr. Brian Kim', 'Geriatric Psychiatry', 'MD');

-- Insert 15-minute appointments (provider_id, appointment_time, status)
INSERT INTO appointments (provider_id, appointment_time, status) VALUES 
  (1, '2025-07-08 09:00:00-07', 'available'),
  (1, '2025-07-08 09:15:00-07', 'reserved'),
  (2, '2025-07-08 10:00:00-07', 'available'),
  (3, '2025-07-09 13:00:00-07', 'available'),
  (4, '2025-07-10 14:30:00-07', 'cancelled');
