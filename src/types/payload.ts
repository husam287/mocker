export enum PayloadTypeEnum {
  List = "list",
  Object = "object",
  Number = "number",
  Text = "text",
}

export interface PayloadType {
  type?: PayloadTypeEnum;
  name?: string;
  count?: number;
}
