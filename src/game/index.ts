import { Plane, setupPlane } from './plane'
import container from '../palne-container'

export default function initGame(_plane: any, bullets: any[]) {
  const palne = setupPlane(_plane, {}, bullets);

  mainTicker(palne);

  return {
    palne,
    bullets
  }
}

function mainTicker(palne: Plane) {
  container.ticker.add(() => {
    palne.run();
  });
}