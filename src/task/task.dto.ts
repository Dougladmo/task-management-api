export class TaskDto {
  id!: string;
  title!: string;
  description!: string;
  status!: string;
  expirationDate!: Date;
}

export interface IFindAllParams {
  title?: string;
  status?: string;
}
