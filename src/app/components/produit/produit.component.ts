import { Component, Input, OnInit } from "@angular/core";
import { Produit } from "src/app/models/produit-model";
import { ProduitService } from "src/app/services/produit/produit.service";

@Component({
  selector: "app-produit",
  templateUrl: "./produit.component.html",
  styleUrls: ["./produit.component.css"],
})
export class ProduitComponent implements OnInit {
  @Input()
  produit: Produit;
  constructor() {}
  ngOnInit() {}
}
