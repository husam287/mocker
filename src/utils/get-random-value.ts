import { faker } from "@faker-js/faker";
import { PayloadType, PayloadTypeEnum } from "../types/payload";

export default function getRandomValue(payload: PayloadType) {
  switch (payload.type) {
    case PayloadTypeEnum.Number:
      return faker.number.int({ min: 1, max: 99 });

    case PayloadTypeEnum.Text:
      return faker.person.fullName();

    default:
      return null;
  }
}
