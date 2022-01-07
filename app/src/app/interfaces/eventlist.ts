import { Artist } from "./artist";

export interface Eventlist{
  eventName: string;
  organizer: string;
  artists: Array<Artist>;
}
