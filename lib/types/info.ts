export interface CampusContact {
  email: string;
  phone: string;
  address: string;
  mapsUrl?: string;
}

export interface CampusInfo {
  name: string;
  faculty: string;
  abbreviation: string;
  description: string;
  contact: CampusContact;
}
