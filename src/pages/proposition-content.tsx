import {
  Title,
  Text,
  Paper,
  Flex,
  Stack,
  Container,
  Group,
  Badge,
  Box,
  Alert,
  Breadcrumbs,
  Anchor,
  Divider,
  Center,
  SegmentedControl,
} from "@mantine/core";
import { IconAlertCircle, IconBolt } from "@tabler/icons-react";
import { useState } from "react";
import Layout from "../components/layout";
import PropositionOriginal from "../components/proposition-original";

export default function PropositionContent() {
  const [value, setValue] = useState("ai");
  const items = [
    { title: "검색", href: "/" },
    { title: "의안 2121422호", href: "/detail" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <Layout>
      <Container size="lg" mb={120}>
        <Breadcrumbs separator="→" mt="xs">
          {items}
        </Breadcrumbs>
        <Box mb={24} mt={40}>
          <Text color="dimmed" weight={400}>
            의안 2121422호
          </Text>
          <Text my={24} size={40} weight={700}>
            노동조합 및 노동관계조정법 일부개정법률안
          </Text>

          <Group>
            <Text color={"dimmed"}>제안일 : 2023-04-10</Text>
            <Group spacing="sm">
              <Badge>key 1</Badge>
              <Badge>key 2</Badge>
              <Badge>key 3</Badge>
            </Group>
          </Group>
        </Box>
        <Alert
          p="md"
          radius="md"
          icon={<IconBolt />}
          title="3줄 요약"
          color="yellow"
        >
          노동조합 관련 법안에서는 산하조직에 대한 규율이 없어 문제가 발생할 수
          있기 때문에, 산하조직에 대한 내부 통제를 강화하고 정보를 노동조합에
          추가하여 관리하도록 하는 법안이 제안되었다. 이는 일부 산하조직의
          폐해를 예방하고 노동조합의 신뢰도를 증진시키는 것을 목적으로 한다.
        </Alert>
        <Divider my="xl" />
        <Flex justify="flex-start" gap={48}>
          <Stack maw={670}>
            <Group position="apart">
              <Text size="xl" weight={700}>
                제안이유 및 주요내용
              </Text>
              <SegmentedControl
                value={value}
                onChange={setValue}
                data={[
                  { label: "AI 분석", value: "ai" },
                  { label: "원문 보기", value: "original" },
                ]}
              />
            </Group>
            {value === "ai" ? <PropositionOriginal /> : <PropositionOriginal />}
          </Stack>
          <Container m={0} w={"100%"}>
            <Stack>
              <Alert
                icon={<IconAlertCircle size="1rem" />}
                title="같이 보면 좋은 단어들"
              >
                키워드 1 : 설명
                <br />
                <br />
                키워드 1 : 설명
                <br />
                <br />
                키워드 1 : 설명
                <br />
                <br />
                키워드 1 : 설명
                <br />
                <br />
                키워드 1 : 설명
                <br />
              </Alert>
            </Stack>
          </Container>
        </Flex>
      </Container>
    </Layout>
  );
}
