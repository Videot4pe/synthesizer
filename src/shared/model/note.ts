export type NoteType = 'black' | 'white';

export type Note = {
  key: string;
  name: string;
  frequency: number;
  type: NoteType;
}