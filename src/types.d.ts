const strEnum = import('@utils/strEnum');

const colorsType = strEnum(import('@utils/constants').colors);
const variantsType = strEnum(import('@utils/constants').variants);
const sortType = strEnum(import('@utils/constants').sort);

declare type Color = keyof typeof colorsType;
declare type Variant = keyof typeof variantsType;
declare type Sort = keyof typeof sortType;

declare interface Filters extends IObjectKeys {
  variant: Variant;
  sort: Sort;
  color: Color;
}

declare interface IObjectKeys {
  [key: string]: Object;
}

declare interface BalloonEdge {
  node: Balloon;
  cursor: string;
}

declare interface Balloon {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  color: Color;
  variant: Variant;
  price: number;
  availableSince: string;
}

declare interface BalloonWithQuantity {
  balloon: Balloon;
  count: number;
}

declare interface KeyValInterface {
  key: string;
  value: string;
}

declare interface PageInfo {
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  startCursor?: string;
  endCursor?: string;
}

declare interface KeyValType {
  [key: string]: string;
}
