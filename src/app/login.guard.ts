import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
// 路由守衛都是"可注入的"服務對象
@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    isLogin = true;
    canActivate() {
        if(this.isLogin){
            return true;
        }else{
            return false;
        }
        //return true: 可以激活後續的組件
        //return false: 阻止激活後續的組件
    }
}