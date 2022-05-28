import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  public result:any=[]
  constructor(private crud:CrudService) { }

  getBrand(){
    this.crud.getData("brand").subscribe((res)=>{
      console.log(res);
      this.result = res;
    })
  }

  ngOnInit(): void {
    this.getBrand()
  }

}
