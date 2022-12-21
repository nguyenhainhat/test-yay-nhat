import { useState } from "react";
import {
  Divider,
  Group,
  Text,
  SegmentedControl,
  Switch,
  Flex,
  Container,
  Grid,
  Button,
  createStyles,
  MediaQuery,
} from "@mantine/core";

type styleBtn = {
  style: any;
  checked: boolean;
};

export default function BaiLam2() {
  const listStyle = ["Outline", "Light", "Filled", "Subtle", "Default"];
  const [value, setValue] = useState<string>("Outline");
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <div className="ex2">
        <Container size={780} p={0} m={0} className="ex2_container">
          <MediaQuery
            smallerThan="sm"
            styles={{
              display: "block",
            }}
          >
            <Grid justify="space-between" align="end" gutter="xl">
              <MediaQuery
                smallerThan="sm"
                styles={{
                  maxWidth: "100%",
                }}
              >
                <Grid.Col span={6} md={6}>
                  <MediaQuery
                    smallerThan="sm"
                    styles={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      margin: "auto",
                      marginLeft: "0",
                    }}
                  >
                    <SegmentedControl
                      value={value}
                      onChange={setValue}
                      data={[
                        { label: "Outline", value: "Outline" },
                        { label: "Light", value: "Light" },
                        { label: "Filled", value: "Filled" },
                        { label: "Subtle", value: "Subtle" },
                        { label: "Default", value: "Default" },
                      ]}
                      mt={32}
                      ml={80}
                      transitionDuration={500}
                      transitionTimingFunction="linear"
                      color={"pink.8"}
                    />
                  </MediaQuery>
                </Grid.Col>
              </MediaQuery>
              <Grid.Col span={6} ta="right" md={5} mr={2}>
                <Switch
                  label="Disabled"
                  mb={3}
                  checked={checked}
                  onChange={(event) => setChecked(event.currentTarget.checked)}
                />
              </Grid.Col>
            </Grid>
          </MediaQuery>
        </Container>
        <Divider size="xs" mt={24} />
      </div>
      <ButtonEx2 style={value} checked={checked} />
    </>
  );
}

const ButtonEx2 = ({ style, checked }: styleBtn) => {
  const getCharFirst = style.charAt(0).toLowerCase();
  const concatString = style.replace(style.charAt(0), getCharFirst);
  return (
    <>
      <Flex justify="center" align="center" mt={24}>
        {checked ? (
          <Button
            mx={"auto"}
            disabled
            variant={concatString}
            w={108}
            className={style}
          >
            The Button
          </Button>
        ) : (
          <Button mx={"auto"} variant={concatString} w={108} className={style}>
            The Button
          </Button>
        )}
      </Flex>
    </>
  );
};
