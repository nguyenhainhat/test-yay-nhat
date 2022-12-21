import { Group, Button, NumberInput, Grid, Divider } from '@mantine/core';
import NumberStats from './components/NumberStats';
import { NumbersFormProvider, useNumbersForm } from './formContext';

export default function BaiLamB1() {
  const form = useNumbersForm({
    initialValues: {
      numbers: [
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 5 },
        { num: 7 },
        { num: 11 },
      ],
    },
  });

  const fields = form.values.numbers.map((_, index) => (
    <Grid.Col key={index} span={6} md={3}>
      <NumberInput placeholder="John Doe" {...form.getInputProps(`numbers.${index}.num`)} />
    </Grid.Col>
  ));

  return (
    <>
      <NumbersFormProvider form={form}>
        <form onSubmit={values => console.log(values)}>

          <Grid my="xl" gutter={50}>
            {fields}
          </Grid>

          <Divider my="xl" />

          <Group position="center" my="md">
            <Button onClick={() => form.insertListItem('numbers', { num: 1 })}>
              Add Number
            </Button>
          </Group>
        </form>

        <NumberStats />
      </NumbersFormProvider>

    </>
  );
}