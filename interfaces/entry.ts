export interface Entry {
  _id: string;
  description: string;
  createAt: number;
  status: entryStatus;
}

export type entryStatus = 'pending' | 'in-progress' | 'finished';
