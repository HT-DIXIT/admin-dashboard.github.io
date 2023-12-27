// angular import
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

// angular material import
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // public props
  productForm!: FormGroup;
  selected!: string;
  statusSelected!: string;

  // more addition functionality next work
  // showInput: boolean = false;
  // formFields: any[] = []; // Array to store form field data

  // toggleInput() {
  //   this.showInput = !this.showInput;
  //   const contentControl = this.productForm.get('content');
  //   contentControl?.setValidators(this.showInput ? Validators.required : null);
  //   contentControl?.updateValueAndValidity();
  // }

  // addFormField() {
  //   this.formFields.push({}); // Add an empty object to the array

  // }

  // constructor
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // reactive form submit with data
  submitForm() {
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    }
  }

  // life cycle hook
  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      offerPrice: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
      // 'content': new FormControl('', this.showInput ? Validators.required : null),
      // 'addContent':  new FormControl('', this.showInput ? Validators.required : null)
    });
  }
}
