import { ShortUrlEntity } from '../../entities';
import { IDValueObject } from '../../value-objects';

export type IGetLastIdShortUrlRepository = {
  getLastId: () => Promise<string>;
};

export type ISaveShortUrlRepository = {
  save: (entity: ShortUrlEntity) => Promise<void>;
};

export type IIncreaseLastIdShortUrlRepository = {
  increaseLastId: (entity: ShortUrlEntity) => Promise<void>;
};

export type IFindByIdShortUrlRepository = {
  findById: (shortUrlId: IDValueObject) => Promise<ShortUrlEntity>;
};

export type IDeleteShortUrlRepository = {
  delete: (entity: ShortUrlEntity) => Promise<void>;
};

export type IShortUrlRepository = IGetLastIdShortUrlRepository &
  ISaveShortUrlRepository &
  IIncreaseLastIdShortUrlRepository &
  IFindByIdShortUrlRepository &
  IDeleteShortUrlRepository;
