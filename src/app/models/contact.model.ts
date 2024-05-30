export interface Contact {
  id: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
}

export type ContactWithoutId = Omit<Contact, 'id'>;
