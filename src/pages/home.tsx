import Layout from "../components/layout";
import {
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
            <>{items}</>
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
