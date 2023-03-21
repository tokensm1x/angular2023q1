import { Component } from '@angular/core';
import { SortTypes } from '../../enums/sort-types.enum';
import { SearchResultModel } from '../../models/search-result.model';
import { SearchModel } from '../../models/search.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isFiltersEnabled: boolean = false;

  public sortDate = SortTypes.DATE;

  public sortCount = SortTypes.COUNT;

  public filterBy: string = '';

  public searchReq: SearchModel = {
    orderBy: {
      dir: '',
      value: '',
    },
    tags: '',
  };

  constructor(private _searchService: SearchService) {}

  searchItems(): void {
    this._searchService.$searchValue.next(this.searchReq);
    this._searchService
      .getResult(this.filterBy)
      .subscribe((res: SearchResultModel) => {
        this._searchService.$searchData.next(res);
      });
  }

  sortItems(orderBy: string): void {
    const dir = this.searchReq.orderBy.dir;
    this.searchReq.orderBy.dir =
      !dir || orderBy !== this.searchReq.orderBy.value
        ? 'asc'
        : dir === 'asc'
        ? 'desc'
        : '';
    this.searchReq.orderBy.value = orderBy;
    this.searchItems();
  }
}
