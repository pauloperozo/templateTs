import { Model, ModelCtor } from 'sequelize/types';
import { MakeNullishOptional } from 'sequelize/types/utils';

export default abstract class DatabaseCore<T extends Model> {
    constructor(private model: ModelCtor<T>) {}
    async init() {}

    async end() {}

    async getById(id: any): Promise<T | null> {
        return this.model.findByPk(id);
    }

    async getOne(filter: Record<string, any>) {
        return await this.model.findOne(filter);
    }

    async getAll(filter: Record<string, any>) {
        return await this.model.findAll(filter);
    }

    async getAndCountAll(filter: Record<string, any>) {
        return await this.model.findAndCountAll(filter);
    }

    async create(data: MakeNullishOptional<T['_creationAttributes']> | undefined): Promise<T> {
        try {
            return await this.model.create(data);
        } catch (error) {
            throw new Error('Error creating item');
        }
    }

    async update(filter: Record<string, any>, data: Partial<T>) {
        const [updatedRows] = await this.model.update(data, { where: filter });
        return updatedRows;
    }

    async delete(filter: Record<string, any>) {
        return await this.model.destroy(filter);
    }
}
