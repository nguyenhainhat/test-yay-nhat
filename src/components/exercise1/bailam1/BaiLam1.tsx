import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import photo from "../../../assets/images/ex1/photo.jpg";

const Demo = () => {
  return (
    <Flex
      mih={370}
      w={350}
      bg="rgba(0, 0, 0, .3)"
      justify="center"
      align="center"
      mt={24}
      mx={"auto"}
    >
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={photo} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={175} fw={500}>
            Son Doong Adventures
          </Text>
          <Badge color="green.2" variant="light">
            FEATURED
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Son Doong Tours you can explore more of the magical fjord
          landscapes with tours and activities on and around the Son Doong cave
          of Vietnam
        </Text>

        <Button variant="light" color="orange.2" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </Flex>
  );
};

export default Demo;
