import { CodeShared } from './code-shared.model';

export interface Flight {
  number: string;
  iata: string;
  icao: string;
  codeshared: CodeShared;
}
