import { Routes } from "@angular/router";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";

const ROUTES_MENU: Routes = [
    { path: "menu/signup", component: SignUpComponent },
    { path: "menu/user", component: UserProfileComponent }
];

export { ROUTES_MENU };