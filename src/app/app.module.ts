import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SecurityComponent } from './security/security.component';
import { LoginGuard } from './login.guard';
import { TimeGuard } from './time.guard';

//聲明路由詞典--路由地址和路由組件的對應集合
type PathMatch = "full" | "prefix" | undefined;
const routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'user/center',
   component: UserCenterComponent,
   canActivate: [LoginGuard, TimeGuard],//路由守衛
   children: [ //嵌套的二級路由
    {path:'', component:InfoComponent},//已經進入，要給他預設要哪個功能
    {path:'info', component:InfoComponent},
    {path:'avatar', component:AvatarComponent},
    {path:'security', component:SecurityComponent},
   ]
  },
  {path: '**', component: NotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserCenterComponent,
    NotFoundComponent,
    InfoComponent,
    AvatarComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
