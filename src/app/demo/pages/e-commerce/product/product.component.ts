// angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { Products } from 'src/app/@theme/types/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // public props
  @ViewChild('commerce') commerce!: MatDrawer;
  modeValue: MatDrawerMode = 'side';
  status: string = 'true';
  selected = 'option-1';
  productData: any
  selectedGender!: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe(['(min-width: 1025px)', '(max-width: 1024.98px)']).subscribe((result) => {
      if (result.breakpoints['(max-width: 1024.98px)']) {
        this.modeValue = 'over';
      } else if (result.breakpoints['(min-width: 1025px)']) {
        this.modeValue = 'side';
      }
    });
    this.breakpointObserver.observe(['(min-width: 1400px)', '(max-width: 1399.98px)']).subscribe((result) => {
      if (result.breakpoints['(max-width: 1399.98px)']) {
        this.status = 'false';
      } else if (result.breakpoints['(min-width: 1400px)']) {
        this.status = 'true';
      }
    });
    this.getProductData();
  }

  genderOptions = ['male', 'female', 'kids'];

  getProductData() {
    if (localStorage.getItem('productData')) {
      let data: any = localStorage.getItem('productData');
      this.productData = JSON.parse(data);
      console.log(this.productData)
    } else {
      localStorage.setItem('productData', JSON.stringify(this.productData));
    }
  }

  

  addToCart(product: Products) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.productData.filter = filterValue.trim().toLocaleLowerCase();
    console.log(this.productData.filter)
  }
}
