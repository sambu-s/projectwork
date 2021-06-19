import { Component, OnInit } from '@angular/core';
import { Product } from './../crud';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(public crudService: CrudService,  private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    })
  }

  deleteProd(id){
    this.crudService.delete(id).subscribe(res => {
      alert('Product deleted successfully!');
      this.router.navigateByUrl('/');
    });
  }
  deleteProduct(event){
    this._snackBar.open(event);

  }
}
