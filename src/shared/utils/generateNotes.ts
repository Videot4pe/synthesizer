import {Note, NoteType} from "#/shared/model/note";

export const generateNotesArray = (startOctave: number, endOctave: number): Note[] => {
  const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const notesWithKeys = [
    { note: 'C', key: 'KeyZ' },
    { note: 'C#', key: 'KeyS' },
    { note: 'D', key: 'KeyX' },
    { note: 'D#', key: 'KeyD' },
    { note: 'E', key: 'KeyC' },
    { note: 'F', key: 'KeyV' },
    { note: 'F#', key: 'KeyG' },
    { note: 'G', key: 'KeyB' },
    { note: 'G#', key: 'KeyH' },
    { note: 'A', key: 'KeyN' },
    { note: 'A#', key: 'KeyJ' },
    { note: 'B', key: 'KeyM' }
  ];
  const notesArray: Note[] = [];
  const a4Index = 57; // Индекс A4 в полной последовательности нот (C0 = 0, ..., A4 = 57, ...)
  const a4Frequency = 440; // Частота A4
  
  for (let i = startOctave; i <= endOctave; i++) {
    for (let j = 0; j < noteNames.length; j++) {
      const noteIndex = i * 12 + j; // Полный индекс ноты
      const n = noteIndex - a4Index; // Позиция относительно A4
      const frequency = a4Frequency * Math.pow(2, n / 12); // Расчет частоты ноты
      const noteName = `${noteNames[j]}${i}`; // Название ноты с октавой
      const type: NoteType = noteNames[j].includes('#') ? 'black' : 'white'; // Определение цвета клавиши
      notesArray.push({
        key: notesWithKeys.find(it => it.note === noteNames[j])!.key,
        name: noteName,
        frequency: Math.round(frequency * 100) / 100,
        type: type
      });
    }
  }
  
  return notesArray;
}
