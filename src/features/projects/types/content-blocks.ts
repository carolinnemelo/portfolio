// Types for content blocks system
export type ContentBlock = 
  | CardSectionBlock 
  | GalleryBlock 
  | TextBlockElement 
  | VideoBlock;

export interface CardSectionBlock {
  _type: 'cardSection';
  title: string;
  items: string[];
}

export interface GalleryBlock {
  _type: 'gallery';
  gallery: Array<{
    image: string;
    caption?: string;
  }>;
}

export interface TextBlockElement {
  _type: 'textBlock';
  title: string;
  body: string;
}

export interface VideoBlock {
  _type: 'video';
  title: string;
  videoUrl: string;
}
