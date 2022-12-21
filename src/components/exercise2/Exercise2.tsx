import { Button, Container, Drawer, Group, Title } from '@mantine/core';
import { useState } from 'react';
import BaiLam2 from './bailam2/BaiLam2';
import DeBai2 from './DeBai2';

export default function Exercise2() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position='apart'>
        <Title order={1}>Exercise 2: Simple React State</Title>
        <Button onClick={() => setOpened(true)}>
          Đề bài
        </Button>
      </Group>

      <Container py="lg" px={0}>
        <BaiLam2 />
      </Container>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Đề bài 2"
        position="right"
        padding="xl"
        size="xl"
      >
        <DeBai2 />
      </Drawer>

    </>
  );
}
