import { ThumbNailsItemModel } from './thumbnails-item.model';

export interface ThumbNails {
  default: ThumbNailsItemModel;
  medium: ThumbNailsItemModel;
  high: ThumbNailsItemModel;
  standard: ThumbNailsItemModel;
  maxres: ThumbNailsItemModel;
}
