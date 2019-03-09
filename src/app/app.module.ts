import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProportionalReportingRatioService} from './services/proportionalReportingRatio.Service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ConfigurationService} from './services/configuration.service';
import {ReportingOddsRatioService} from './services/reportingOddsRatio.Service';
import {ContingencyTableService} from './services/contingencyTable.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProportionalReportingRatioService, ConfigurationService, ReportingOddsRatioService, ContingencyTableService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
