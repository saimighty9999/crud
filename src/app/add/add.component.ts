import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }
  add(form:NgForm){
    console.log(form.value);
    return this.http.post(`https://ty-shop.herokuapp.com/api/products`,form.value).subscribe((result=>{
      console.log(result);
      alert("product added successfully")
      this.route.navigate(["product"])
    }))
    
  }
  ngOnInit(): void {
  }

}
