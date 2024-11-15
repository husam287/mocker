import { PayloadType, PayloadTypeEnum } from "../types/payload";
import getRandomValue from "./get-random-value";

export default function resolvePayload(payload: PayloadType) {
  const count = payload.count || 1;
  let list: any[] = [];

  Array.from({ length: count }).forEach(() => {
    const payloadItem: { [key: string]: any } = {};

    payload.payload?.forEach((object) => {
      if (!object?.name) return;
      if (!object.type) return;

      const isComplexPayload = [
        PayloadTypeEnum.Object,
        PayloadTypeEnum.List,
      ].includes(object.type);

      if (isComplexPayload) {
        payloadItem[object.name] = resolvePayload(object);
      } else {
        payloadItem[object.name] = getRandomValue(object);
      }
    });

    list.push(payloadItem);
  });

  if (payload.type === PayloadTypeEnum.List) {
    return list;
  }

  return list[0];
}
