export interface BlogPost {
  title: string;
  published: boolean;
  date: string;
  image: string;
  slug: string;
  category?: string;
  description?: string;
  tags?: string[];
  attribution: string;
  series?: {
    slug: string;
    order: number; // Position in the series
  };
}

export interface ContributionType {
  image: string;
  projectTitle: string;
  pullReqLink: string;
  description: JSX.Element;
}
