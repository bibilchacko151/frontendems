import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Expense:{}
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
