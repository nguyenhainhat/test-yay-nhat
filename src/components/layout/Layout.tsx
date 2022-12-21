import {
  AppShell,
  Navbar,
  Header,
  useMantineColorScheme,
  Group,
  ActionIcon,
  Image,
  Container
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import MainLinks from './MainLinks';
import Main from './Main';

export default function LayoutAppShell() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      fixed={false}
      navbar={
        <Navbar width={{ base: 250 }} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Image
              height={40} width={35}
              src="/yaycommerce-icon.png" alt='YayCommerce'
            />
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >

      <Container size="xl">
        <Main />
      </Container>

    </AppShell>
  );
}