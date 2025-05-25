import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import Svg, { Line, Circle, Text as SvgText } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';
import { Container, SvgContainer } from './styles';

const AnimatedLine = Animated.createAnimatedComponent(Line);

interface TunerMeterProps {
  deviation: number; // -50 to 50, where 0 is in tune
  size?: number;
}

export function TunerMeter({ 
  deviation, 
  size: propSize,
}: TunerMeterProps) {
  const { width } = useWindowDimensions();
  const size = propSize || Math.min(width * 0.8, 300);
  const radius = size * 0.35; // Slightly smaller radius
  
  // Animated values
  const needleRotation = useSharedValue(0);
  
  // Update needle rotation with smooth animation
  useEffect(() => {
    const angle = (deviation / 50) * 45;
    needleRotation.value = withSpring(angle, {
      damping: 15,
      stiffness: 90,
      mass: 0.5,
    });
  }, [deviation]);

  // Create scale markers
  const scaleMarkers = Array.from({ length: 9 }, (_, i) => {
    const markerAngle = -40 + (i * 10);
    const markerLength = i % 2 === 0 ? 12 : 6;
    const startRadius = radius - 5;
    const endRadius = radius - 5 - markerLength;
    
    return {
      x1: Math.sin((markerAngle * Math.PI) / 180) * startRadius,
      y1: -Math.cos((markerAngle * Math.PI) / 180) * startRadius,
      x2: Math.sin((markerAngle * Math.PI) / 180) * endRadius,
      y2: -Math.cos((markerAngle * Math.PI) / 180) * endRadius,
    };
  });

  // Animated needle props
  const needleProps = useAnimatedProps(() => {
    const x = Math.sin((needleRotation.value * Math.PI) / 180) * radius;
    const y = -Math.cos((needleRotation.value * Math.PI) / 180) * radius;
    
    return {
      x2: x,
      y2: y,
    };
  });

  const halfSize = size / 2;
  const viewBoxSize = size;
  const viewBoxHalf = viewBoxSize / 2;

  return (
    <Container>
      <SvgContainer>
        <Svg
          width={size}
          height={size}
          viewBox={`${-viewBoxHalf} ${-viewBoxHalf} ${viewBoxSize} ${viewBoxSize}`}
          style={{ alignSelf: 'center' }}
        >
          {/* Scale markers */}
          {scaleMarkers.map((marker, index) => (
            <Line
              key={index}
              x1={marker.x1}
              y1={marker.y1}
              x2={marker.x2}
              y2={marker.y2}
              stroke="#444"
              strokeWidth="1.5"
            />
          ))}

          {/* Center dot */}
          <Circle cx="0" cy="0" r="4" fill="#666" />

          {/* Animated needle */}
          <AnimatedLine
            x1="0"
            y1="0"
            animatedProps={needleProps}
            stroke="#FF5733"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Note symbols */}
          <SvgText
            x={-radius - 15}
            y="5"
            fill="#666"
            fontSize="20"
            textAnchor="middle">
            ♭
          </SvgText>
          <SvgText
            x={radius + 15}
            y="5"
            fill="#666"
            fontSize="20"
            textAnchor="middle">
            ♯
          </SvgText>
        </Svg>
      </SvgContainer>
    </Container>
  );
} 