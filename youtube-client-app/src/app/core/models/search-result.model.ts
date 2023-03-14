import { PageInfoModel } from './page-info.model';
import { SearchItemModel } from './search-item.model';

export interface SearchModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoModel;
  items: Array<SearchItemModel>;
}
