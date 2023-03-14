import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { SearchResultModel } from '../models/search-result.model';
import { SearchModel } from '../models/search.model';

@Injectable()
export class SearchService {
  data: SearchResultModel = require('../data/data.json');

  $searchData = new BehaviorSubject<SearchResultModel>({} as SearchResultModel);
  $searchValue = new BehaviorSubject<SearchModel>({} as SearchModel);

  getResult(filterBy: string): Observable<SearchResultModel> {
    return of(this.data).pipe(
      map((res: SearchResultModel) => {
        const newRes: SearchResultModel = Object.assign({}, res);
        newRes.items = res.items.filter((el) => {
          return el.snippet.title
            .toLowerCase()
            .includes(filterBy.toLocaleLowerCase());
        });
        return newRes;
      })
    );
  }
}
