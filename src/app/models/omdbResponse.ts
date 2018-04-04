import { Film } from "./film";

export class OmdbResponse {
    Response: string;
    Search: Film[];
    totalResults:string;
}