import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "phoneNumber";

export const ContactTitle = (record: TContact): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
