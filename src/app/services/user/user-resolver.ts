import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";
import { inject, Inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../../models/user.model";

// export const UserResolver: ResolveFn<any> = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot,
//   userService: UserService = inject(UserService)
// ) :Observable<User> => {

// }