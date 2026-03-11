// Types for content blocks system
export type ContentBlock = 
  | CardSectionBlock 
  | GalleryBlock 
  | TextBlockElement 
  | VideoBlock;

export interface ProjectCardItem {
  content: string;
  title?: string;
  footer?: string;
  icon?: string;
  number?: string;
}

export interface CardSectionBlock {
  _type: "cardSection";
  title: string;
  items: ProjectCardItem[];
}

export interface GalleryBlock {
  _type: 'gallery';
  gallery: Array<{
    image: string;
    caption?: string;
  }>;
}

export interface PortableTextSpan {
  _type: "span";
  text?: string;
}

export interface PortableTextBlock {
  _type: "block";
  style?: "normal" | "h3" | "h4" | "blockquote" | string;
  children?: PortableTextSpan[];
}

export interface TextBlockElement {
  _type: "textBlock";
  title: string;
  body: string | PortableTextBlock[];
}

export interface VideoBlock {
  _type: 'video';
  title: string;
  videoUrl: string;
}
