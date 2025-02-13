export interface Bookmark {
    name: string;
    url: string;
    description?: string; // Optional description for tooltips
  }
  
  export interface Category {
    category: string;
    links: Bookmark[];
  }