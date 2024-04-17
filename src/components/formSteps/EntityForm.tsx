import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface EntityFormI {
  form: any;
}

const EntityForm = ({ form }: EntityFormI) => {
  return (
    <>
      <FormField
        control={form.control}
        name='entity_form'
        render={({ field }) => (
          <FormItem className='mb-8 space-y-3'>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className='flex flex-col space-y-1'
              >
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='self-employed' />
                  </FormControl>
                  <FormLabel className='font-normal'>Самозанятый</FormLabel>
                </FormItem>
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='individual entrepreneur' />
                  </FormControl>
                  <FormLabel className='font-normal'>
                    Индивидуальный предприниматель
                  </FormLabel>
                </FormItem>
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='smb' />
                  </FormControl>
                  <FormLabel className='font-normal'>Субъект МСП</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
export default EntityForm;
