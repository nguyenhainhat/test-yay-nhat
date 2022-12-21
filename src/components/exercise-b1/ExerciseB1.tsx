import { Button, Container, Drawer, Group, Title } from '@mantine/core';
import { useState } from 'react';
import BaiLamB2 from './bailam-b1/BaiLamB1';
import DeBaiB2 from './DeBaiB1';

export default function ExerciseB1() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position='apart'>
        <Title order={1}>Exercise B1: Array Handling</Title>
        <Button onClick={() => setOpened(true)}>
          Đề bài
        </Button>
      </Group>

      <Container py="lg" px={0}>
        <BaiLamB2 />
      </Container>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Đề bài B1"
        position="right"
        padding="xl"
        size="xl"
      >
        <DeBaiB2 />
      </Drawer>

    </>
  );
}
