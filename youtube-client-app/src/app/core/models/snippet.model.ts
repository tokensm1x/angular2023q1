import { LocalizeModel } from './localize.model';
import { ThumbNails } from './thumbnails.model';

export interface SnippetModel {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbNails;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: LocalizeModel;
  defaultAudioLanguage: string;
}
