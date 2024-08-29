import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export async function getAllContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    console.log(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error);
  }
}

getAllContacts();
