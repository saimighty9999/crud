import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  router: any;
  id:any
  product:any
  selectedProduct:any


  constructor(private http:HttpClient, private route:ActivatedRoute, private rout:Router) { }
  // edit(form:NgForm){
  //   console.log(form.value);
  // }
  ngOnInit(): void {
    this.id=this.route.snapshot.params["i"]
     console.log(this.id);
     this.http.get<any>(`https://ty-shop.herokuapp.com/api/products`).subscribe((res)=>{
       console.log(res);
       this.product = res.products
       for(let d of this.product)   {
         if(d._id === this.id){
           this.selectedProduct = d
         }
       }  
    })
    
  }
  
  edit(datas:any){
    console.log(datas);
    this.http.put<any>(`https://ty-shop.herokuapp.com/api/products/${this.selectedProduct._id}`,datas).subscribe((res)=>{
      console.log(res);
      
    })
    
  }

  
}
