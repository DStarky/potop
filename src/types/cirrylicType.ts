export interface Cyrillic {
  имя_заявителя: string;
  фамилия_заявителя: string;
  отчество_заявителя: string;

  телефон: string;
  электронный_адрес: string;

  инн: string;

  субсидия_возобновление: boolean;
  субсидия_финансовая: boolean;
  субсидия_льгота: boolean;

  наименование_юл: string;
  огрн: string;
  кпп: string;

  юридический_адрес_муниципалитет: string;
  юридический_адрес_населенный_пункт: string;
  юридический_адрес_улица: string;
  юридический_адрес_номер_дома: string;
  юридический_адрес_номер_квартиры: string;

  фактический_адрес: string;

  наименование_банка: string;
  инн_банка: string;
  кпп_банка: string;
  бик_банка: string;
  корреспондирующий_счет: string;
  расчетный_счет: string;

  согласие_офшоры: boolean;
  согласие_терроризм: boolean;
  согласие_оон: boolean;
  согласие_бюджет: boolean;
  согласие_иноагент: boolean;
  согласие_налоговый_счет: boolean;
  согласие_задолженность: boolean;
  согласие_реорганизация: boolean;
  согласие_дисквалификация: boolean;

  согласие_проверки: boolean;
  согласие_данные: boolean;
  согласие_налоговая: boolean;
  согласие_интернет: boolean;

  документ_паспорт: string;
  документ_копия: string;
  документ_расчет: string;
  документ_сведения: string;
  документ_персональные_данные: string;

  согласие_сведения: boolean;
  согласие_порядок: boolean;
  согласие_условие: boolean;
}
