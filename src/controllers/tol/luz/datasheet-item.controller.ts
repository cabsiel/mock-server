import { Filter, Where, repository } from '@loopback/repository';
import { post, param, get, patch, del, requestBody } from '@loopback/rest';

import { DatasheetItemLuz } from '../../../models'
import { DatasheetItemLuzRepository } from '../../../repositories';

export class DatasheetItemController {
  constructor(
    @repository(DatasheetItemLuzRepository) public datasheetItemLuzRepository: DatasheetItemLuzRepository,
  ) { }

  /**
   * GET item account
   * @param filter
   */
  @get('/tol/luz/datasheet-item', {
    responses: {
      '200': {
        description: 'Array of datasheetItemLuz model instances',
        content: {
          'application/text': { 
            schema: { type: 'text', values: 'prueba' },
          },
        },
      },
    },
  })
  async find(@param.query.string('filter') filter?: Filter): Promise<DatasheetItemLuz[]> {
    return await this.datasheetItemLuzRepository.find(filter);
  }

}
