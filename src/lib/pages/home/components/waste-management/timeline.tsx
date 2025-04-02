import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const CustomTimelineSeparator: React.FC<{ hasConnector?: boolean }> = ({
  hasConnector = true,
}) => (
  <TimelineSeparator>
    <TimelineDot sx={{ backgroundColor: 'black' }} />
    {hasConnector && <TimelineConnector sx={{ backgroundColor: 'black' }} />}
  </TimelineSeparator>
);

export default function TimelineComponent() {
  return (
    <Timeline className="w-full" position="alternate">
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
          <div
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="grid grid-cols-1 gap-3"
          >
            <h1 className="w-full text-lg font-bold">Reduzir</h1>
            <p className="text-sm font-normal">
              Utilizar técnicas de gerenciamento para diminuir a quantidade de
              material consumido.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
          <div
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="grid grid-cols-1 gap-3"
          >
            <h1 className="w-full text-lg font-bold">Reutilizar</h1>
            <p className="text-sm font-normal">
              Utilizar novamente um material, no mesmo uso para o qual foi
              projetado, ou em outro uso compatível.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
          <div
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="grid grid-cols-1 gap-3"
          >
            <h1 className="w-full text-lg font-bold">Reciclar</h1>
            <p className="text-sm font-normal">
              Reciclagem é um conjunto de técnicas que tem por finalidade
              aproveitar os resíduos e colocá-los novamente no ciclo de produção
              de que saíram.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
