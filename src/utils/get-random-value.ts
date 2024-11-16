import { faker } from "@faker-js/faker";
import { PayloadType, PayloadTypeEnum } from "../types/payload";

export default function getRandomValue(payload: PayloadType) {
  switch (payload.type) {
    case PayloadTypeEnum.Number:
      return faker.number.int({ min: 1, max: 99 });

    case PayloadTypeEnum.Text:
      return faker.person.fullName();

    case PayloadTypeEnum.Date:
      return faker.date.anytime();

    case PayloadTypeEnum.Birthdate:
      return faker.date.birthdate();

    case PayloadTypeEnum.UserAvatar:
      return faker.image.avatar();

    case PayloadTypeEnum.Phone:
      return faker.phone.number({ style: "international" });

    case PayloadTypeEnum.EgyptianLocation:
      return [
        faker.location.longitude({ min: 24, max: 37, precision: 6 }),
        faker.location.latitude({ min: 22, max: 32, precision: 6 }),
      ];

    case PayloadTypeEnum.Image:
      return faker.image.url({ height: 500, width: 500 });

    default:
      return null;
  }
}
