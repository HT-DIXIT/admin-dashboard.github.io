// angular import
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

// angular material import
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {
  // constructor
  constructor(
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // public method
  onDelete() {
    this.dialogRef.close(this.data);
  }

  onNo() {
    this.dialogRef.close();
  }
}
