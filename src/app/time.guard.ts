import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeGuard implements CanActivate {
  constructor(private router: Router){
  }

  //如果在6點-23點之間允許訪問，否則不允許訪問。把此守衛應用於"用戶中心"。
  canActivate() {
    let hour = new Date().getHours();
    if(hour>=6 && hour<=23){
      return true;
    }else{
      // 可以選擇執行頁面跳轉
      this.router.navigateByUrl('/index');
      return false;
    }
  }
  
}
