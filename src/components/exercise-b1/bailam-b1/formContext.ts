import { createFormContext } from '@mantine/form';

interface NumbersFormValues {
  numbers: { num: number; }[];
}

export const [NumbersFormProvider, useNumbersFormContext, useNumbersForm] =
  createFormContext<NumbersFormValues>();