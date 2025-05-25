import { Platform, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { AdjacentNotes } from '@/components/AdjacentNotes';
import { TunerMeter } from '@/components/TunerMeter/TunerMeter';
import {
  Container,
  StyledGradient,
  Content,
  TunerContainer,
  FrequencyContainer,
  StatusText,
  FrequencyLabel,
  FrequencyValue,
  FrequencyUnit,
} from './styles';

export default function TunerScreen() {
  const { height } = useWindowDimensions();
  const [currentNote, setCurrentNote] = useState('E');
  const [frequency, setFrequency] = useState(2748.1);
  const [deviation, setDeviation] = useState(0); // -50 a 50

  const prevNotes = ['D₇', 'D♯₇'];
  const nextNotes = ['F₇', 'F♯₇'];

  const getStatusColor = () => {
    const absDeviation = Math.abs(deviation);
    if (absDeviation <= 5) return '#2ecc71'; // Verde quando afinado
    if (absDeviation <= 15) return '#f1c40f'; // Amarelo quando próximo
    return '#e74c3c'; // Vermelho quando desafinado
  };

  const getStatusText = () => {
    const absDeviation = Math.abs(deviation);
    if (absDeviation <= 5) return 'Afinado';
    if (absDeviation <= 15) return 'Quase afinado';
    return 'Desafinado';
  };

  const getMeterSize = () => {
    const baseSize = Math.min(height * 0.45, 400);
    return Platform.OS === 'web' ? baseSize * 0.8 : baseSize;
  };

  return (
    <Container edges={['top', 'right', 'left']}>
      <StyledGradient colors={['#1a1a1a', '#222222', '#1a1a1a']}>
        <Content>
          <StatusText color={getStatusColor()}>
            {getStatusText()}
          </StatusText>

          <AdjacentNotes
            currentNote={`${currentNote}₇`}
            prevNotes={prevNotes}
            nextNotes={nextNotes}
          />

          <TunerContainer>
            <TunerMeter
              deviation={deviation} 
              size={getMeterSize()}
            />

            <FrequencyContainer>
              <FrequencyLabel>Frequência</FrequencyLabel>
              <FrequencyValue>{frequency.toFixed(1)}</FrequencyValue>
              <FrequencyUnit>Hz</FrequencyUnit>
            </FrequencyContainer>
          </TunerContainer>
        </Content>
      </StyledGradient>
    </Container>
  );
} 