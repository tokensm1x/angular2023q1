import { Pipe, PipeTransform } from '@angular/core';
import { SortTypes } from 'src/app/core/enums/sort-types.enum';
import { SearchItemModel } from 'src/app/core/models/search-item.model';
import { SearchModel } from 'src/app/core/models/search.model';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: SearchItemModel[], filter: SearchModel): SearchItemModel[] {
    const tagsArray = filter?.tags?.split(' ');
    const newItems = Object.keys(filter)?.length
      ? items.sort((a: SearchItemModel, b: SearchItemModel) => {
        if (filter.orderBy.value === SortTypes.COUNT) {
          if (filter.orderBy.dir === 'asc') {
            return +a.statistics.viewCount - +b.statistics.viewCount;
          } else if (filter.orderBy.dir === 'desc') {
            return +b.statistics.viewCount - +a.statistics.viewCount;
          }
        } else if (filter.orderBy.value === SortTypes.DATE) {
          if (filter.orderBy.dir === 'asc') {
            return (
              new Date(a.snippet.publishedAt).getTime() -
                new Date(b.snippet.publishedAt).getTime()
            );
          } else if (filter.orderBy.dir === 'desc') {
            return (
              new Date(b.snippet.publishedAt).getTime() -
                new Date(a.snippet.publishedAt).getTime()
            );
          }
        }
        return 0;
      })
      : items;
    return filter.tags
      ? newItems.filter((el: SearchItemModel) => {
        function getItems(): boolean {
          for (let i = 0; i < el.snippet.tags.length; i++) {
            if (
              el.snippet.tags[i].includes(filter.tags) ||
                tagsArray.some((tag: string) =>
                  el.snippet.tags[i].includes(tag.trim()),
                )
            ) {
              return true;
            }
          }
          return false;
        }
        return getItems();
      })
      : newItems;
  }
}
