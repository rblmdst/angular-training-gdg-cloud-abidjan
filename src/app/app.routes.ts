import { Routes } from '@angular/router';
import { ContactListPageComponent } from './contact-list-page/contact-list-page.component';
import { EditContactPageComponent } from './edit-contact-page/edit-contact-page.component';

export const routes: Routes = [
  { path: 'contacts', component: ContactListPageComponent },
  { path: 'contacts/edit/:contactId', component: EditContactPageComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
];
