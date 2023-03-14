import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SearchResultModel } from 'src/app/core/models/search-result.model';
import { SearchService } from 'src/app/core/services/search.service';
import { takeUntil } from 'rxjs/operators';
import { SearchItemModel } from 'src/app/core/models/search-item.model';
import { SearchModel } from 'src/app/core/models/search.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  public data: SearchResultModel = {} as SearchResultModel;

  public items: SearchItemModel[] = [];

  public search: SearchModel = {} as SearchModel;

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {
    this._searchService.$searchData
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res: SearchResultModel) => {
        this.search = this._searchService.$searchValue.getValue();
        this.items = res.items || [];
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
