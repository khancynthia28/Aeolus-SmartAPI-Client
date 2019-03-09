import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';

@Injectable()
export class ReportingOddsRatioService {

  constructor(private httpClient: HttpClient, private config: ConfigurationService) {
  }

  public getRORCodes = (rdc: string, roc: string) => {
    const params = new HttpParams();
    params.append(rdc, rdc);
    params.append(roc, roc);
    const path = '/RORCodes';
    return this.httpClient.get(this.config.BaseDomain + path, {params});
  };

  public getRORNames = (rdn: string, ron: string) => {
    const params = new HttpParams();
    params.append(rdn, rdn);
    params.append(ron, ron);
    const path = '/RORNames';
    return this.httpClient.get(this.config.BaseDomain + path, {params});
  };
}
