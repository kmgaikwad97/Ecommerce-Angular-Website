import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { DataTransferServiceService } from '../service/data-transfer-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public result:any=[];
  constructor(private crud:CrudService, private dt:DataTransferServiceService) { }

  getCategories(){
  this.crud.getData("category").subscribe((res)=>{
      console.log(res);
      this.result = res; 
    })
  }

  ngOnInit(): void {
    this.getCategories()
  }

  filter_category(id:number, ev:any){
    console.log(id);
    console.log(ev);
    ev.preventDefault();

    this.dt.dataToTransfer({cid:id})
  }

}
