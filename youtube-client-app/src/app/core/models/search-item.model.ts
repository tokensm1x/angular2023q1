import { SnippetModel } from './snippet.model';
import { StatisticsModel } from './statistics.model';

export interface SearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetModel;
  statistics: StatisticsModel;
}
