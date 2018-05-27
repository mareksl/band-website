import { events } from './data';

export interface Event {
  _id: string;
  location: string;
  date: number;
  description: string;
  link: string;
  __v: number;
}

export interface EventsResponse {
  page: number;
  total: number;
  events: Event[];
}

export class HttpController {
  //   eventsUrl = 'http://localhost:3000';
  //   getEvents() {
  //     fetch(this.eventsUrl).then(events => {});
  //   }
  getEventsDummy(): Promise<EventsResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(<EventsResponse>{
          page: 0,
          total: 1,
          events: events
        });
      }, 500);
    });
  }
}
