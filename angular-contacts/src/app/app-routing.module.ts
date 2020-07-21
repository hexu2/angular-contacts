import { TagNewComponent } from './tag-new/tag-new.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: 'new',
        component: ContactNewComponent
      },
      {
        path: 'edit',
        component: ContactEditComponent
      }
    ]
  },
  {
    path: 'tags',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'new',
        component: TagNewComponent
      },
      {
        path: 'edit',
        component: TagEditComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
