import React, { useState } from 'react';
import { Layer, Rect, Stage, Line, Shape } from 'react-konva';
import Konva from 'konva';

const ColoredRect = () => {
  const [color, setColor] = useState('green')
  const handleClick = () => {
    setColor(Konva.Util.getRandomColor())
  };
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', placeItems: 'center', backgroundColor: '#1b1b1b' }}>
      <Stage width={900} height={600} style={{ backgroundColor: 'white' }}>
        <Layer>
          <Line
            points={[0, 0, 340, 23, 450, 60, 500, 500]}
            stroke="black"
            strokeWidth={3}
            lineCap='round'
          // bezier
          />
          <Shape
            stroke='red'
            strokeWidth={4}

          />
        </Layer>
      </Stage>
    </div>
  );
}
export default ColoredRect