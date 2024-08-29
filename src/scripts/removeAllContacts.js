import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export async function removeAllContacts() {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
}

removeAllContacts();
