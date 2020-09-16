import { Pagination } from '.';
import { FlightData } from './flight-data.model';

export interface FlightsRequest {
  pagination: Pagination;
  data: FlightData[];
}
