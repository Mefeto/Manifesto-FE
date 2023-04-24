import Layout from "../components/layout";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  Group,
  Input,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import { navData } from "../lib/const/navigate";
import PropositionThumbnail from "../components/proposition-thumbnail";
import { IconPlus } from "@tabler/icons-react";

export default function Home() {
  const items = navData.map((item) => (
    <Checkbox
      key={item.label}
      label={item.label}
      styles={{ label: { color: "gray" } }}
    />
  ));
  return (
    <Layout>
      <Container mt={100} mb={80}>
        <Center>
          <Stack>
            <Text c="black" align="center" size={24} my={10}>
              발의안 정보를 검색해보세요
            </Text>
            <Input
              placeholder="발의대표자명, 정당, 발의명으로 검색"
              w={540}
              radius="xl"
              size="md"
            />
          </Stack>
        </Center>
      </Container>
      <Container size={"lg"}>
        <Flex gap={40} justify="center">
          <Stack w={200} justify={"flex-start"}>
            <Text color={"dimmed"}>필터</Text>
            <Accordion
              chevron={<IconPlus size="1rem" />}
              styles={{
                chevron: {
                  "&[data-rotate]": {
                    transform: "rotate(45deg)",
                  },
                },
                panel: {
                  marginTop: 8,
                },
              }}
            >
              {/*<Accordion.Item value="키워드">*/}
              {/*  <Accordion.Control>키워드</Accordion.Control>*/}
              {/*  <Accordion.Panel>*/}
              {/*    <Stack>*/}
              {/*      <Checkbox label="test" />*/}
              {/*      <Checkbox label="test" />*/}
              {/*      <Checkbox label="test" />*/}
              {/*      <Checkbox label="test" />*/}
              {/*    </Stack>*/}
              {/*  </Accordion.Panel>*/}
              {/*</Accordion.Item>*/}
              <Accordion.Item value="소관위원회">
                <Accordion.Control>소관위원회</Accordion.Control>
                <Accordion.Panel>
                  <Stack>{items}</Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
          {/*<GridProposition />*/}
          <Stack w={"calc(100% - 300px)"} justify={"flex-start"}>
            <PropositionThumbnail />
            <PropositionThumbnail />
            <PropositionThumbnail />
            <PropositionThumbnail />
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
}
