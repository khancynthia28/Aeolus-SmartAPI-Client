import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigurationService} from './configuration.service';

@Injectable()
export class ProportionalReportingRatioService {

  protected baseDomain = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient, private config: ConfigurationService) {
  }

  public getPRRCodes = (pdc: string, poc: string): Observable<any> => {
    const params = new HttpParams();
    params.append(pdc, pdc);
    params.append(poc, poc);
    const path = '/pprcodes';
    return this.httpClient.get(this.config.BaseDomain + path, {params});
  };

  public getPRRNames = (pdn: string, pon: string): Observable<any> => {
    const params = new HttpParams();
    params.append(pdn, pdn);
    params.append(pon, pon);
    const path = '/pprnames';
    return this.httpClient.get(this.config.BaseDomain + path, {params});
  };
}
