import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { subjects } from '@/constants';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Companion name is required.' }),
  subject: z.string().min(1, { message: 'Companion subject is required.' }),
  topic: z.string().min(1, { message: 'Companion topic is required.' }),
  voice: z.string().min(1, { message: 'Companion voice is required.' }),
  style: z.string().min(1, { message: 'Companion style is required.' }),
  duration: z.coerce
    .number()
    .min(1, { message: 'Companion duration is required.' }),
});

const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      topic: '',
      voice: '',
      style: '',
      duration: 15, // Default duration in minutes
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', data);
    // Here you would typically handle the form submission, e.g., send data to an API
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter the companion name'
                    {...field}
                    className='input'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className='input capitalize'>
                      <SelectValue placeholder='Select the subject' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Subjects</SelectLabel>
                        {subjects.map((subject) => (
                          <SelectItem
                            key={subject}
                            value={subject}
                            className='capitalize'
                          >
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='topic'
            render={({ field }) => (
              <FormItem>
                <FormLabel>What should the companion help with?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Ex. Derivatives in Calculus'
                    {...field}
                    className='input'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='voice'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className='input capitalize'>
                      <SelectValue placeholder='Select the voice' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Voices</SelectLabel>
                        <SelectItem value='male'>Male</SelectItem>
                        <SelectItem value='female'>Female</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='style'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className='input capitalize'>
                      <SelectValue placeholder='Select the style' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Styles</SelectLabel>
                        <SelectItem value='formal'>Formal</SelectItem>
                        <SelectItem value='casual'>Casual</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name='duration'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated session duration in minutes</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    min={1}
                    placeholder='15'
                    {...field}
                    className='input'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full cursor-pointer'>Build your companion</Button>
        </form>
      </Form>
    </div>
  );
};

export default CompanionForm;
