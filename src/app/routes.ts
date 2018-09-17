import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const appRoutes: Routes = [
    { path: "", component: ProductListComponent, pathMatch: "full" },
    { path: "products", component: ProductListComponent },
    { path: "product/:id", component: ProductPageComponent }
];