import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PipeProductPipe } from './pipe/pipe-product.pipe';
const table_routage = [
  {path: 'list', component: ProductsListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PipeProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(table_routage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
