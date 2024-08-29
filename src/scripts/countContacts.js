import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export async function countContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    console.log(`Total contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
}

countContacts();
