import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';

@Injectable()
export class ContingencyTableService {

  constructor(private httpClient: HttpClient, private config: ConfigurationService) {
  }

  public getContingencyTableCodes = (cdc: string, coc: string) => {
    const params = new HttpParams();
    params.append(cdc, cdc);
    params.append(coc, coc);
    const path = '/contingencyTableCodes';
    return this.httpClient.get(this.config.BaseDomain + path, {params});
  };

  public getContingencyTableNames = (cdn: string, con: string) => {
    const params = new HttpParams();
    params.append(cdn, cdn);
    params.append(con, con);
    const path = '/contingencyTableNames';
    return this.httpClient.get(this.config.BaseDomain + path, {params});
  };
}
