// server/db/init.ts
import { exec } from 'child_process';
import path from 'path';

const schemaPath = path.join(__dirname, 'schema.sql');
const seedsPath = path.join(__dirname, 'seeds.sql');

exec(`psql -U postgres -f ${schemaPath}`, (err, stdout, stderr) => {
  if (err) return console.error(`Schema error:\n${stderr}`);
  console.log(`Schema loaded:\n${stdout}`);

  exec(`psql -U postgres -d psychiatry_db -f ${seedsPath}`, (err2, stdout2, stderr2) => {
    if (err2) return console.error(`Seeds error:\n${stderr2}`);
    console.log(`Seeds loaded:\n${stdout2}`);
  });
});
