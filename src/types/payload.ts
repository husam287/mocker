export enum PayloadTypeEnum {
  List = "list",
  Object = "object",
  Number = "number",
  Text = "text",
  Date = "date",
  Birthdate = "birthdate",
  UserAvatar = "user_avatar",
  Phone = "phone",
  EgyptianLocation = "egyptian_location",
  Image = "image",
}

export interface PayloadType {
  type?: PayloadTypeEnum;
  name?: string;
  count?: number;
  payload?: PayloadType[];
}

export interface PayloadWithFileNameType {
  path: string;
  payload: PayloadType;
}
