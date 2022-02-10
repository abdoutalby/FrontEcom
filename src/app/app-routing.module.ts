import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ManagementComponent } from "./components/management/management.component";
import { AjouterProduitComponent } from "./components/management/produit/ajouter-produit/ajouter-produit.component";
import { UpdateProduitComponent } from "./components/management/produit/update-produit/update-produit.component";
import { AjouterCategorieComponent } from "./components/management/categorie/ajouter-categorie/ajouter-categorie.component";
import { UpdateCategorieComponent } from "./components/management/categorie/update-categorie/update-categorie.component";
import { AuthGuard } from "./guards/auth.guard";
import { UserComponent } from "./components/management/user/user/user.component";
import { ProduitComponent } from "./components/produit/produit.component";
import { ProduitsComponent } from "./components/produits/produits.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "management",
    component: ManagementComponent,
    canActivate: [AuthGuard],
  },
  { path: "register", component: RegisterComponent },
  { path: "ajouter-produit", component: AjouterProduitComponent },
  { path: "modifier-produit/:id", component: UpdateProduitComponent },
  { path: "ajouter-categorie", component: AjouterCategorieComponent },
  { path: "modifier-categorie/:id", component: UpdateCategorieComponent },
  { path: "users", component: UserComponent, canActivate: [AuthGuard] },
  { path: "produit", component: ProduitComponent, canActivate: [AuthGuard] },
  { path: "produits", component: ProduitsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
