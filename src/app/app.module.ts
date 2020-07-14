import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './home/pokemon-list/pokemon-list.component';
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './detail/detail.component';
import { PokemonTypeComponent } from './common/pokemon-type/pokemon-type.component';
import { PokemonStatsComponent } from './detail/pokemon-stats/pokemon-stats.component';
import { PokemonProfileComponent } from './detail/pokemon-profile/pokemon-profile.component';
import { EffortValuePipe } from './common/effort-value.pipe';
import { PokemonEvolutionComponent } from './detail/pokemon-evolution/pokemon-evolution.component';
import { PokemonDamageComponent } from './detail/pokemon-damage/pokemon-damage.component';
//import { CreateProductComponent } from './create-product/create-product.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ProductListComponent } from './product-list/product-list.component';
//import { ProductGuardService } from './services/products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonListComponent,
    DetailComponent,
    PokemonTypeComponent,
    PokemonStatsComponent,
    PokemonProfileComponent,
    EffortValuePipe,
    PokemonEvolutionComponent,
    PokemonDamageComponent,
    //CreateProductComponent,
    //ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    //FormsModule,
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
