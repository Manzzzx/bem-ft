export interface Member {
  name: string;
  role?: string;
  pictureUrl?: string;
}

export interface Division {
  name: string;
  coordinator: string;
  members: Member[];
}
