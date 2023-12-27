import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.component').then((c) => c.ProductListComponent)
  },
  {
    path: 'product',
    loadComponent: () => import('./product/product.component').then((c) => c.ProductComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule {}
