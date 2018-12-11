import { inject } from '@loopback/core';
import { juggler, AnyObject } from '@loopback/repository';
const config = require('./db-tol-luz.datasource.json');

export class DbTolLuzDataSource extends juggler.DataSource {
  static dataSourceName = 'dbTolLuz';

  constructor(
    @inject('datasources.config.db-tol-luz', { optional: true })
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig);
  }
}
