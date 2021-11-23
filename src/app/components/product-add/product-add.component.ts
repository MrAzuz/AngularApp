import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?:FormGroup;
  submitted:boolean=false;
  //forrr?:FormControl;
  //               *ngIf="submitted && productFormGroup.controls.name.errors"
  //*ngIf="productFormGroup.controls.name.error.required"


  constructor(private fb:FormBuilder, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],
    });
  }
  onSaveProduct(){
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.productsService.save(this.productFormGroup?.value)
    .subscribe(data=>{
      alert("Success Saving product !")

    })
  }

}
