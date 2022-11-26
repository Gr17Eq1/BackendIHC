import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Rolusuario} from '../models';
import {RolusuarioRepository} from '../repositories';

export class RolusuarioController {
  constructor(
    @repository(RolusuarioRepository)
    public rolusuarioRepository : RolusuarioRepository,
  ) {}

  @post('/rolusuarios')
  @response(200, {
    description: 'Rolusuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rolusuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rolusuario, {
            title: 'NewRolusuario',
            exclude: ['id'],
          }),
        },
      },
    })
    rolusuario: Omit<Rolusuario, 'id'>,
  ): Promise<Rolusuario> {
    return this.rolusuarioRepository.create(rolusuario);
  }

  @get('/rolusuarios/count')
  @response(200, {
    description: 'Rolusuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rolusuario) where?: Where<Rolusuario>,
  ): Promise<Count> {
    return this.rolusuarioRepository.count(where);
  }

  @get('/rolusuarios')
  @response(200, {
    description: 'Array of Rolusuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rolusuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rolusuario) filter?: Filter<Rolusuario>,
  ): Promise<Rolusuario[]> {
    return this.rolusuarioRepository.find(filter);
  }

  @patch('/rolusuarios')
  @response(200, {
    description: 'Rolusuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rolusuario, {partial: true}),
        },
      },
    })
    rolusuario: Rolusuario,
    @param.where(Rolusuario) where?: Where<Rolusuario>,
  ): Promise<Count> {
    return this.rolusuarioRepository.updateAll(rolusuario, where);
  }

  @get('/rolusuarios/{id}')
  @response(200, {
    description: 'Rolusuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rolusuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rolusuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Rolusuario>
  ): Promise<Rolusuario> {
    return this.rolusuarioRepository.findById(id, filter);
  }

  @patch('/rolusuarios/{id}')
  @response(204, {
    description: 'Rolusuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rolusuario, {partial: true}),
        },
      },
    })
    rolusuario: Rolusuario,
  ): Promise<void> {
    await this.rolusuarioRepository.updateById(id, rolusuario);
  }

  @put('/rolusuarios/{id}')
  @response(204, {
    description: 'Rolusuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rolusuario: Rolusuario,
  ): Promise<void> {
    await this.rolusuarioRepository.replaceById(id, rolusuario);
  }

  @del('/rolusuarios/{id}')
  @response(204, {
    description: 'Rolusuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rolusuarioRepository.deleteById(id);
  }
}
