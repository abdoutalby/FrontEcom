import { Component, OnInit } from "@angular/core";
import { Produit } from "src/app/models/produit-model";
import { ProduitService } from "src/app/services/produit/produit.service";

@Component({
  selector: "app-produits",
  templateUrl: "./produits.component.html",
  styleUrls: ["./produits.component.css"],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private service: ProduitService) {}

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.service.allProduit(token).subscribe((res) => (this.produits = res));
  }
}
