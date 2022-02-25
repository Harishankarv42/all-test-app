import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {

    return this.http.get(environment.API_URL+'product');
  }

  createProduct(val:any){
   return this.http.post(environment.API_URL+'product',val);
  }

  updateProduct(val:any){
     return this.http.put(environment.API_URL+'product',val);
  }

  deleteProduct(id:any){
  return  this.http.delete(environment.API_URL+'product/'+id);
  }

  getProductById(id:any){
    return  this.http.get(environment.API_URL+'product/'+id);
    }
}
