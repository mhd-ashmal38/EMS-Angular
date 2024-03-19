import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allusers:any=[],searchTerm:string,property:string): any[] {
    // eath value aaane change aaavendath, athane transforminte argument aayy first kodukkendath

    // array to hold transformed values
    let result:any=[]
    if(!allusers||searchTerm===""||property===""){
      return allusers
    }
    else{
      allusers.forEach((item:any) => {
        if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
          result.push(item)
        }
      });
    }
    return result;
}

}
