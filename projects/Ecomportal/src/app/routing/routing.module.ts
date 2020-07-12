import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminGuard } from '../common/guard/admin.guard';
import { UserGuard } from '../common/guard/user.guard';
//import { AdminModule } from '../admin/admin.module';
//import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //AdminModule,
    //UserModule,
    RouterModule.forRoot([
       //{ path: 'admin', loadChildren: '../admin/admin.module#AdminModule', canLoad: [AdminGuard] },
       //{ path: 'user', loadChildren: '../user/user.module#UserModule', canLoad: [UserGuard] }
       {path: 'admin', loadChildren: () => import(`../admin/admin.module`).then(m => m.AdminModule),canLoad:[AdminGuard] },
      {path: 'user', loadChildren: () => import(`../user/user.module`).then(m => m.UserModule),canLoad:[UserGuard] }
    ]),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
