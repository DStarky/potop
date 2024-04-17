export interface RequestI {
  firstname: string; // Имя заявителя
  lastname: string; // Фамилия заявителя
  middlename: string; // Отчество заявителя

  phone: string; // Телефон
  email: string; // Email
  fax: string; // Факс

  entity_form: EntityForm; // Форма юр.лица

  name: string; // Наименование юр.лица
  inn: string; // ИНН
  ogrn: string; // ОГРН
  kpp: string; // КПП
  oktmo: string; // ОКТМО
  okato: string; // ОКАТО

  address_municipality: string; // Муниципальное образование
  address_city: string; // Населенный пункт
  address_district: string; // Район
  address_street: string; // Улица
  address_building: string; // Дом
  address_block: string | null; // Корпус дома
  address_apartment: string | null; // Квартира

  amount: number; // Размер ожидаемой субсидии

  post_municipality: string; // Муниципальное образование (для почтового адреса)
  post_city: string; // Населенный пункт  (для почтового адреса)
  post_district: string; // Район (для почтового адреса)
  post_street: string; // Улица (для почтового адреса)
  post_building: string; // Дом
  post_block: string | null; // Корпус дома (для почтового адреса)
  post_apartment: string | null; // Квартира (для почтового адреса)

  bank_name: string; // Наименование банка
  bank_inn: string; // ИНН банка
  bank_kpp: string; // КПП банка
  bank_correspondent_account: string; // Корреспондирующий счет банка
  bank_account: string; // Расчетный счет

  media: any[]; // Фото/видео подтверждения
  documents_ownership: any[]; // Документы о праве собственности
  document_identification: any; // Документ удостоверяющий личность/подтверждающий полномочия лица, подавшего заявку
  document_certificate: any; // Cправка о соответствии условиям отбора
  document_accounting: any; // Копии отчетных документов СФР (форма-4 ФСС РФ) или ФНС (форма по КНД 1151111).
}

export interface RequestContextProps {
  propertyForm: RequestI | null;
  updatePropertyForm: (property: Partial<RequestI>) => void;
}

export interface StepI {
  id: number;
  title: string;
  fields: string[];
}

export const ENTITY_FORM = [
  'self-employed',
  'individual entrepreneur',
  'smb',
] as const;
type EntityForm = (typeof ENTITY_FORM)[number];

export interface AgreementI {
  name: string;
  label: string;
}
