import { PageInfoModel } from './page-info.model';
import { SearchItemModel } from './search-item.model';

export interface SearchResultModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoModel;
  items: Array<SearchItemModel>;
}
