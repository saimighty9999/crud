import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
data:any
  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.toGet()
  }
  addNavI(){
    this.route.navigate([this.addNavI])
  }
  toGet(){
    this.http.get<any>(`https://ty-shop.herokuapp.com/api/products`).subscribe((val)=>{
      console.log(val);
      this.data=val.products
      console.log(this.data);
      
    })
  }
 toDelete(id: any){
   console.log(id);
   
    this.http.delete<any>(`https://ty-shop.herokuapp.com/api/products/${id}`).subscribe(res=>{
     console.log(res);
     alert("delete successfully") 
   })

 }
}
