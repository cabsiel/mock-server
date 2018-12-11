import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { DatasheetItemLuz } from '../../../models/tol/luz/datasheet-item.model';
import { inject } from '@loopback/core';

export class DatasheetItemLuzRepository extends DefaultCrudRepository<
  DatasheetItemLuz,
  typeof DatasheetItemLuz.prototype.id
  > {
  constructor(
    @inject('datasources.dbTolLuz') protected datasource: juggler.DataSource,
  ) {
    super(DatasheetItemLuz, datasource);
  }
}
