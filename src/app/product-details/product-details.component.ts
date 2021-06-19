import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'stream';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() Products;
@Output() deleteProduct=new EventEmitter();

    constructor(public crudService: CrudService,  private router: Router) { }
      ngOnInit() {
      }
      deleteProd(id){
        this.crudService.delete(id).subscribe(res => {
        //  alert('Product deleted successfully!');
        this.deleteProduct.emit('Product deleted successfully!');
          this.router.navigateByUrl('/');
        });
      }
}