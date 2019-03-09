import {Injectable} from '@angular/core';

@Injectable()
export class ConfigurationService {
    /***
     * Holds the base domain url
     */
    public BaseDomain = 'https://jsonplaceholder.typicode.com/todos';
}
