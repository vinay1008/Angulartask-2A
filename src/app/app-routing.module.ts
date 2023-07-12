import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  {path:"phone", component : PhoneComponent},
  {path:"email", component : EmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
