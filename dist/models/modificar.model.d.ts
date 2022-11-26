import { Model } from '@loopback/repository';
export declare class Modificar extends Model {
    passold: string;
    passnew: string;
    passconfirm: string;
    constructor(data?: Partial<Modificar>);
}
export interface ModificarRelations {
}
export declare type ModificarWithRelations = Modificar & ModificarRelations;
