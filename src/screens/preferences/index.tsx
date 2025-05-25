import { Switch } from 'react-native';
import { useState } from 'react';
import {
  Container,
  Content,
  Title,
  PreferencesContainer,
  PreferenceItem,
  PreferenceText,
} from './styles';

export default function PreferencesScreen() {
  const [useMicrophone, setUseMicrophone] = useState(true);
  const [showFrequency, setShowFrequency] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const switchProps = {
    trackColor: { false: '#333', true: '#FF5733' },
    thumbColor: (value: boolean) => value ? '#fff' : '#f4f3f4',
  };

  return (
    <Container edges={['top', 'right', 'left']}>
      <Content>
        <Title>Preferências</Title>
        
        <PreferencesContainer>
          <PreferenceItem>
            <PreferenceText>Usar Microfone</PreferenceText>
            <Switch
              value={useMicrophone}
              onValueChange={setUseMicrophone}
              trackColor={switchProps.trackColor}
              thumbColor={switchProps.thumbColor(useMicrophone)}
            />
          </PreferenceItem>

          <PreferenceItem>
            <PreferenceText>Mostrar Frequência</PreferenceText>
            <Switch
              value={showFrequency}
              onValueChange={setShowFrequency}
              trackColor={switchProps.trackColor}
              thumbColor={switchProps.thumbColor(showFrequency)}
            />
          </PreferenceItem>

          <PreferenceItem>
            <PreferenceText>Modo Escuro</PreferenceText>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={switchProps.trackColor}
              thumbColor={switchProps.thumbColor(darkMode)}
            />
          </PreferenceItem>
        </PreferencesContainer>
      </Content>
    </Container>
  );
} 