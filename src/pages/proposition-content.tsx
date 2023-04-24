import {
  Text,
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
import { useState } from "react";
import Layout from "../components/layout";
import PropositionOriginal from "../components/proposition-original";
import { data } from "../lib/const/data";
import { useParams } from "react-router-dom";
import PropositionAi from "../components/proposition-ai";
import PropositionDictionary from "../components/proposition-dictionary";

export default function PropositionContent() {
  const [value, setValue] = useState("original");
  const param = useParams();
  const id = param.id;
  const cntProposition = data.filter((item) => item.BILL_ID === id).at(0);

  const breadcrumbs = [
    { title: "검색", href: "/" },
    { title: "의안 2121422호", href: `/proposition/${id}` },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Layout>
      <Container size="lg" mb={120}>
        <Breadcrumbs separator="→" mt="xs">
          {breadcrumbs}
        </Breadcrumbs>
        <Box mb={24} mt={40}>
          <Text color="dimmed" weight={400}>
            의안 제 {cntProposition?.BILL_NO}호
          </Text>
          <Text my={24} size={40} weight={700}>
            {cntProposition?.BILL_NAME}
          </Text>

          <Stack>
            <Text color={"dimmed"}>
              제안일 : {cntProposition?.PROPOSE_DT} | 제안자 :{" "}
              {cntProposition?.PROPOSER}
            </Text>
          </Stack>
        </Box>
        <Divider my="xl" />
        <Flex justify="flex-start" gap={48}>
          <Stack maw={670}>
            <Group position="apart">
              <Text size="xl" weight={700}>
                {value === "ai" ? "AI 분석" : "원문 내용"}
              </Text>
              <SegmentedControl
                value={value}
                onChange={setValue}
                data={[
                  { label: "원문 보기", value: "original" },
                  { label: "AI 분석", value: "ai" },
                ]}
              />
            </Group>
            {value === "ai" ? (
              <PropositionAi content={cntProposition?.ANALYTICS} />
            ) : (
              <PropositionOriginal
                content={cntProposition?.DETAIL_CONTENT}
                originalLink={cntProposition?.DETAIL_LINK}
              />
            )}
          </Stack>
          <PropositionDictionary words={cntProposition?.ANALYTICS.words} />
        </Flex>
      </Container>
    </Layout>
  );
}
