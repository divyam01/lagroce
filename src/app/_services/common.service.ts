import { Injectable } from '@angular/core';
import { AppUtils } from '../httpUtils/utils';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url = '/bot/global-search';
  public resolvedVal: any;
  public openVal: any;
  public search: any
  public searchdata: any

  constructor(private http:AppUtils) {}

  searchResults(search){
    
    
    this.http.post(this.url,{
      "search":search
  }).subscribe((res:any)=>{
      this.searchdata=res.data;
      console.log("searchdata",this.searchdata);
      
      
    })
  }
}
