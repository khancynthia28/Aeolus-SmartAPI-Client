/* tslint:disable:semicolon */
import {Component} from '@angular/core';
import {ProportionalReportingRatioService} from './services/proportionalReportingRatio.Service';
import {ContingencyTableService} from './services/contingencyTable.service';
import {ReportingOddsRatioService} from './services/reportingOddsRatio.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: any;
  public cdc: string;
  public coc: string;
  public cdn: string;
  public con: string;
  public pdc: string;
  public poc: string;
  public pdn: string;
  public pon: string;
  public rdc: string;
  public roc: string;
  public rdn: string;
  public ron: string;

  constructor(private prrClient: ProportionalReportingRatioService,
              private conClient: ContingencyTableService,
              private rorClient: ReportingOddsRatioService) {
  }

  getContingencyTableNames = (): void => {
    this.conClient.getContingencyTableNames(this.cdn, this.con).subscribe(rsp => {
      this.results = rsp;
    });
  };

  getContingencyTableCodes = (): void => {
    this.conClient.getContingencyTableCodes(this.cdc, this.coc).subscribe(rsp => {
      this.results = rsp;
    });
  };

  getPPRNames = (): void => {
    this.prrClient.getPRRNames(this.pdn, this.pon).subscribe(rsp => {
      this.results = rsp;
    });
  };
  getPPRCodes = (): void => {
    this.prrClient.getPRRCodes(this.pdc, this.poc).subscribe(rsp => {
      this.results = rsp;
    });
  };

  getRORNames = (): void => {
    this.rorClient.getRORNames(this.rdn, this.ron).subscribe(rsp => {
      this.results = rsp;
    });
  };

  getRORCodes = (): void => {
    this.rorClient.getRORCodes(this.rdc, this.roc).subscribe(rsp => {
      this.results = rsp;
    });
  };
}
