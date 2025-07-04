-- Drop the psychiatry_db if it exists
DROP DATABASE IF EXISTS psychiatry_db;

-- Create the psychiatry_db
CREATE DATABASE psychiatry_db;

-- Connect to the new database
\c psychiatry_db;

-- Drop existing tables (in order to avoid conflicts during development)
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS providers;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS companies;

-- Create companies table
CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

-- Create locations table
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  address TEXT,
  city TEXT,
  state TEXT,
  zip TEXT
);

-- Create providers table
CREATE TABLE providers (
  id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  specialty TEXT,
  credentials TEXT
);

-- Create appointments table (all appointments = 15 mins)
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  provider_id INTEGER REFERENCES providers(id) ON DELETE CASCADE,
  appointment_time TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'available'
);
