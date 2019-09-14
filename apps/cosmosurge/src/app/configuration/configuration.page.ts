import { Component } from '@angular/core';
import { ImportExportService } from '@kryptand/patients';
@Component({
  selector: 'kryptand-configuration',
  templateUrl: 'configuration.page.html',
  styleUrls: ['configuration.page.scss']
})
export class ConfigurationPage {

  constructor(private importExport:ImportExportService) {}
  export(){
    this.importExport.exportToCsv();
  }
  import(){}
}
