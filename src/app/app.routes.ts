import { Routes } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { EnrollComponent } from './enroll/enroll.component';
import { TransferComponent } from './transfer/transfer.component';
import { SpecialTransferComponent } from './special-transfer/special-transfer.component';

export const routes: Routes = [
    {path:'profile',component:StudentProfileComponent},
    {path:'enroll',component:EnrollComponent},
    {path:'transfer',component:TransferComponent},
    {path:'special_transfer',component:SpecialTransferComponent}
];
