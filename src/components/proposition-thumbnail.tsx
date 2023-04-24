import React, { useEffect, useMemo, useState } from "react";
import {
  Badge,
  Card,
  Center,
  Group,
  Pagination,
  Stack,
  Text,
} from "@mantine/core";
import { useHover, usePagination } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

import { data } from "../lib/const/data";

function PropositionThumbnail({
  searchFilters,
  input,
}: {
  searchFilters: string[];
  input: string;
}) {
  const router = useNavigate();
  const thumbnails = data
    .filter((item) =>
      searchFilters.length === 0
        ? true
        : searchFilters.includes(item.COMMITTEE ? item.COMMITTEE : "")
    )
    .filter(
      (item) =>
        item.BILL_NAME.includes(input) ||
        item.COMMITTEE?.includes(input) ||
        item.RST_PROPOSER.includes(input)
    )
    .map((item) => {
      return (
        <Card
          withBorder
          padding="lg"
          radius="md"
          w={"100%"}
          key={item.BILL_ID}
          onClick={() => router(`/proposition/${item.BILL_ID}`)}
          sx={{ "&:hover": { backgroundColor: "#F8F9FA", cursor: "pointer" } }}
        >
          <Text size="sm" color="dimmed">
            의안 제 {item.BILL_NO}호 |{" "}
            {item.COMMITTEE ? item.COMMITTEE : "소관위원회 미정"}
          </Text>
          <Text size="xl" color="black" my={16}>
            {item.BILL_NAME}
          </Text>
          <Group position="left" mt="xs">
            <Badge color="blue" variant="light">
              {item.AGE}대 발의자 : {item.PROPOSER}
            </Badge>
            <Badge color="green" variant="light">
              발의 날짜 : {item.PROPOSE_DT}
            </Badge>
          </Group>
        </Card>
      );
    });
  return <>{thumbnails}</>;
}

export default function PropositionList({
  input,
  filter,
}: {
  input: string;
  filter: string[];
}) {
  return (
    <Stack w={"calc(100% - 300px)"} justify={"flex-start"}>
      <PropositionThumbnail input={input} searchFilters={filter} />
    </Stack>
  );
}
