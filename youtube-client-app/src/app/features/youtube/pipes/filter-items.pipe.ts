import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from 'src/app/core/models/search-item.model';
import { SearchModel } from 'src/app/core/models/search.model';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: SearchItemModel[], filter: SearchModel): SearchItemModel[] {
    console.log(filter);
    // return items.filter((el: SearchItemModel) => {
    //   return el.snippet.title
    //     .toLowerCase()
    //     .includes(filter.filterBy.toLocaleLowerCase());
    // });
    return items;
  }
}
