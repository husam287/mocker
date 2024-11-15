import { PayloadType, PayloadTypeEnum } from "../types/payload";

function getValue(payload: PayloadType) {
  switch (payload.type) {
    case PayloadTypeEnum.Number:
      return 28;

    case PayloadTypeEnum.Text:
      return "Hossam";

    default:
      return null;
  }
}

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
        payloadItem[object.name] = getValue(object);
      }
    });

    list.push(payloadItem);
  });

  if (payload.type === PayloadTypeEnum.List) {
    return list;
  }

  return list[0];
}
