export interface DivisionMember {
  name: string;
  role?: string;
}

export interface Division {
  name: string;
  coordinator: string;
  members: DivisionMember[];
}
