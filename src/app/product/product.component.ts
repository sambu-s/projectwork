import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('f') myFormData: any;
  model: any = {};
  showUpdate: boolean = false;
  id: any = '';

  constructor(
    private router: Router,
    public crudService: CrudService, private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    let path = this._router.snapshot.url;
    this.id = path[1] ?path[1].toString():'';

    if (this.id) {
      this.showUpdate = true;
      this.crudService.getById(this.id).subscribe(res => {
        this.model = res;
      });

    }
    else {
      this.showUpdate = false;
    }

  }

  onSubmit() {
    this.crudService.create(this.myFormData.value).subscribe(res => {
    
      alert('Product created successfully!');
      this.router.navigateByUrl('/');
     
    });

  }

  onUpdate() {
    console.log(this.myFormData.value, "valueeeee")
    this.crudService.update(this.id, this.myFormData.value).subscribe(res => {
      alert('Product Updated successfully!');
      this.router.navigateByUrl('/');
    });
  }


}
