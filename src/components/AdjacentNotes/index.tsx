import { Container, SideNotes, InactiveNote, CurrentNote } from './styles';

interface AdjacentNotesProps {
  currentNote: string;
  prevNotes: string[];
  nextNotes: string[];
}

export function AdjacentNotes({ currentNote, prevNotes, nextNotes }: AdjacentNotesProps) {
  return (
    <Container>
      <SideNotes>
        {prevNotes.map((note, index) => (
          <InactiveNote
            key={`prev-${note}`}
            opacity={0.3 + (index * 0.2)}>
            {note}
          </InactiveNote>
        ))}
      </SideNotes>

      <CurrentNote>{currentNote}</CurrentNote>

      <SideNotes>
        {nextNotes.map((note, index) => (
          <InactiveNote
            key={`next-${note}`}
            opacity={0.5 - (index * 0.2)}>
            {note}
          </InactiveNote>
        ))}
      </SideNotes>
    </Container>
  );
} 