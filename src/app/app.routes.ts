import { Routes } from '@angular/router';
import { ContactListPageComponent } from './contact-list-page/contact-list-page.component';
import { EditContactPageComponent } from './edit-contact-page/edit-contact-page.component';
import { TestFormComponent } from './test-form/test-form.component';
import { CreateContactPageComponent } from './create-contact-page/create-contact-page.component';

export const routes: Routes = [
  {
    path: 'contacts',
    children: [
      { path: '', component: ContactListPageComponent },
      { path: 'new', component: CreateContactPageComponent },
      { path: 'edit/:contactId', component: EditContactPageComponent },
    ],
  },
  // { path: 'contacts', component: ContactListPageComponent },
  // { path: 'contacts/edit/:contactId', component: EditContactPageComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'form-control', component: TestFormComponent },
];
