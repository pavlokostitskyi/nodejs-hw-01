import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export async function removeLastContact() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
}

removeLastContact();
