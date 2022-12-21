import { Button, Container, Drawer, Group, Title } from '@mantine/core';
import { useState } from 'react';
import BaiLamB2 from './bailam-b2/BaiLamB2';
import DeBaiB2 from './DeBaiB2';

export default function ExerciseB2() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position='apart'>
        <Title order={1}>Exercise B2: Incoming</Title>
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
        title="Đề bài B2"
        position="right"
        padding="xl"
        size="xl"
      >
        <DeBaiB2 />
      </Drawer>

    </>
  );
}
