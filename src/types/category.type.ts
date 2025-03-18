export interface ICategory {
  _id: string;
  name: string;
  description: string;
  parent: string | null;
  icon: string;
  slug: string;
  isActive: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  children: ICategory[];
}
