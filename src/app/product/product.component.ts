import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { DataTransferServiceService } from '../service/data-transfer-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public result:any=[]
  constructor(private crud:CrudService, private dt:DataTransferServiceService) { }

  getProduct(record:string){
    this.crud.getData(record).subscribe((res)=>{
      console.log(res);
      this.result = res
    })
  }

  ngOnInit(): void {
    this.getProduct("product");

    // Subscribe your category in on category link click

    this.dt.objSub.subscribe((res:any)=>{
      console.log("AFTER DATA TRANSFER");
      console.log(res); //{cid:1}

      //http://localhost:3000/products?categoryid=2

      var path = `product?categoryid=${res['cid']}`
      console.log(path);
      this.getProduct(path);
    })
  }

}
