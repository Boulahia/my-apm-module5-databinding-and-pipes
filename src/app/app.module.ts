import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PipeProductPipe } from './pipe/pipe-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PipeProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
