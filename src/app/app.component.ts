import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
  selector: "pokemon-app",
  templateUrl: `./app/app.component.html`,
})
export class AppComponent {
  private pokemons: Pokemon[]; // tableau de pokemons
  private title: string = "Liste des pokémons";
  values = "";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez cliqué sur " + pokemon.name);
  }
}
