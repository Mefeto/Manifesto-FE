import React from "react";
import { Badge, Card, Group, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export default function PropositionThumbnail() {
  const { ref, hovered } = useHover();
  const router = useNavigate();
  return (
    <Card
      padding="lg"
      radius="md"
      bg={hovered ? "gray.0" : undefined}
      w={"100%"}
      ref={ref}
      onClick={() => router("/detail")}
    >
      <Text size="sm" color="dimmed">
        국군통상위원회
      </Text>
      <Text size="m" color="black">
        산업기능요원의 군복무기간 연장에 관한 법률 일부개정법률안
      </Text>
      <Group position="left" mt="xs">
        <Badge color="pink" variant="light">
          청년
        </Badge>
        <Badge color="pink" variant="light">
          국방
        </Badge>
        <Badge color="pink" variant="light">
          안보
        </Badge>
      </Group>
    </Card>
  );
}
