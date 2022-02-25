import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductService,private router: Router,) { }

  products:any=[];

  modalTitle ="";
  ProductId = 0;
  ProductName = "";
  ProductDescirption = "";

  ngOnInit(): void {
    this.refreshList();
  }



  refreshList() {
      this.productService.getProducts().subscribe(res => {
      this.products=res;
      });
    }

    deleteClick(id:any){
      if(confirm('Are you sure?')){
        this.productService.deleteProduct(id)
          .subscribe(res=>{
            alert(res.toString());
            this.refreshList();
          });
        }
    }

    addClick(){
      this.modalTitle="Add Product";
      this.ProductId=0;
      this.ProductName="";
      this.ProductDescirption="";
    }

    editClick(prod:any){
      this.modalTitle="Edit Product";
      this.ProductId=prod.ProductId;
      this.ProductName=prod.ProductName;
      this.ProductDescirption=prod.ProductDescirption;
    }


    createClick(){
      var val={
        ProductName:this.ProductName,
        ProductDescirption:this.ProductDescirption,
      };
      this.productService.createProduct(val).subscribe(res => {
          alert(res.toString());
        this.refreshList();
        });     
    }

    updateClick(){
      var val={
        ProductId:this.ProductId,
        ProductName:this.ProductName,
        ProductDescirption:this.ProductDescirption,
      };
  
      this.productService.updateProduct(val).subscribe(res => {
        alert(res.toString());
      this.refreshList();
      }); 
    }


    openItem(ProductId: number) {
      this.router.navigateByUrl(`/product/edit/${ProductId}`);
    }
  
  
}
