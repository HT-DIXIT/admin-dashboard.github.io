// angular import
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

// angular material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {

// public props
  productViewData = this.data;

  // constructor
  constructor(
    public dialogRef: MatDialogRef<ProductViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
