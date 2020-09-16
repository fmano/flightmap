import { Airline } from './airline.model';
import { Flight } from './flight.model';
import { Live } from './live.model';
export interface FlightData {
  flight_date?: string;
  flight_status?: string;
  departure: Departure;
  arrival: Arrival;
  airline: Airline;
  flight: Flight;
  aircraft: string;
  live: Live;
}

export interface Departure {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string;
  gate: string;
  delay: string;
  scheduled: string;
  estimated: string;
  actual: string;
  estimated_runway?: string;
  actual_runway?: string;
}

export interface Arrival extends Departure {
  baggage: string;
}
