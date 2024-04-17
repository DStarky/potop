import Link from 'next/link';

import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

interface AgreementFormI {
  form: any;
}
const AgreementForm = ({ form }: AgreementFormI) => {
  return (
    <>
      <FormField
        control={form.control}
        name='agreement_foreign'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                субъект МСП не является иностранным юридическим лицом в том
                числе местом регистрации которого является государство или
                территория, включенные в утвержденный Министерством финансов
                Российской Федерации перечень государств и территорий,
                используемых для промежуточного (офшорного) владения активами в
                Российской Федерации (далее - офшорные компании), а также
                российским юридическим лицом, в уставном (складочном) капитале
                которого доля прямого или косвенного (через третьих лиц) участия
                офшорных компаний в совокупности превышает 25
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_terror'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                субъект МСП или самозанятый не находится в перечне организаций и
                физических лиц, в отношении которых имеются сведения об их
                причастности к экстремистской деятельности или терроризму
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_oon'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                субъект МСП или самозанятый не находится в составляемых в рамках
                реализации полномочий, предусмотренных главой VII Устава ООН,
                Советом Безопасности ООН или органами, специально созданными
                решениями Совета Безопасности ООН, перечнях организаций и
                физических лиц, связанных с террористическими организациями и
                террористами или с распространением оружия массового уничтожения
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_orenburg'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                субъект МСП или самозанятый не получает средства из бюджета
                субъекта Оренбургской области на цели, указанные в пункте 3{' '}
                <Link href='#'>Порядка</Link>
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_control'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                субъект МСП или самозанятый не является иностранным агентом в
                соответствии с Федеральным законом ”О контроле за деятельностью
                лиц, находящихся под иностранным влиянием”
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_nalog'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                у субъекта МСП или самозанятого на едином налоговом счете
                отсутствует или не превышает размер, определенный пунктом 3
                статьи 47 Налогового кодекса Российской Федерации, задолженность
                по уплате налогов, сборов и страховых взносов в бюджеты
                бюджетной системы Российской Федерации
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_debt'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                у субъекта МСП или самозанятого просроченная задолженность по
                возврату в областной бюджет бюджетных инвестиций, субсидий,
                предоставленных в том числе в соответствии с иными правовыми
                актами, и иная просроченная (неурегулированная) задолженность
                перед Оренбургской областью
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_reorganization'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                субъект МСП, являющийся юридическим лицом, не находится в
                процессе реорганизации (за исключением реорганизации в форме
                присоединения к юридическому лицу, являющемуся получателем
                субсидии (участником отбора), другого юридического лица),
                ликвидации, в отношении его не введена процедура банкротства,
                деятельность субъекта МСП не приостановлена в порядке,
                предусмотренном законодательством Российской Федерации, а
                субъект МСП,являющийся индивидуальным предпринимателем, не
                прекратил деятельность в качестве индивидуального
                предпринимателя
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_disqualification'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                в реестре дисквалифицированных лиц отсутствуют сведения о
                дисквалифицированных руководителе, членах коллегиального
                исполнительного органа, лице, исполняющем функции единоличного
                исполнительного органа, или главном бухгалтере (при наличии)
                субъекта МСП, являющегося юридическим лицом, об индивидуальном
                предпринимателе и о физическом лице (самозанятом) -
                производителе товаров, работ, услуг, являющихся получателями
                субсидии
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_check'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                согласие на осуществление министерством проверок соблюдения
                участником отбора порядка и условий предоставления субсидии, в
                том числе в части достижения результата предоставления субсидии,
                а также проверок органом государственного финансового контроля
                соблюдения порядка и условий предоставления субсидии в
                соответствии со статьями 2681 и 2692 Бюджетного кодекса
                Российской Федерации и на включение таких положений в соглашение
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_personal'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                cогласие на обработку персональных данных
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </>
  );
};
export default AgreementForm;
