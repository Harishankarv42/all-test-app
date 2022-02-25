import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(public productService:ProductService,private activatedRoute: ActivatedRoute) { }

  products:any=""

  ngOnInit(): void {
    this.productService.getProductById(this.activatedRoute.snapshot.params['id']).subscribe(res => {
      this.products=res;
      });

  }

}
