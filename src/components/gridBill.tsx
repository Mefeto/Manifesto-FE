import {
  SimpleGrid,
  Card,
  Text,
  Badge,
  Group,
  Button,
  Navbar,
  ScrollArea,
  NavLink,
  Container,
  Box,
} from "@mantine/core";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { navData } from "../lib/const/navigate";
import { useViewportSize } from "@mantine/hooks";

export default function GridProposition() {
  const [navActive, setNavActive] = useState(0);
  const { width } = useViewportSize();
  const navItems = navData.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === navActive}
      label={item.label}
      onClick={() => setNavActive(index)}
    ></NavLink>
  ));
  return (
    <>
      <SimpleGrid
        w={"100%"}
        cols={3}
        p="md"
        spacing="lg"
        verticalSpacing="xs"
        breakpoints={[
          { maxWidth: "xl", cols: 2, spacing: "sm" },
          { maxWidth: "md", cols: 1, spacing: "sm" },
        ]}
      >
        <Card shadow="sm" padding="lg" radius="md" withBorder>
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
            <Button variant="light" color="blue" fullWidth mt="s" radius="md">
              자세한 내용 보기
            </Button>
          </Group>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text size="sm" color="dimmed">
            국군통상위원회
          </Text>
          <Text size="m" color="black">
            산업기능요원의 업무 범위에 관한 법률 일부개정법률안
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
            <Button variant="light" color="blue" fullWidth mt="s" radius="md">
              자세한 내용 보기
            </Button>
          </Group>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text size="sm" color="dimmed">
            여성가족위원회
          </Text>
          <Text size="m" color="black">
            공공기관 내 사내 유치원 설치에 관한 법률 일부개정법률안
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
            <Button variant="light" color="blue" fullWidth mt="s" radius="md">
              자세한 내용 보기
            </Button>
          </Group>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text size="sm" color="dimmed">
            국군통상위원회
          </Text>
          <Text size="m" color="black">
            엄청 긴 내용이 들어가는데 어떻게 될까요? 엄청 긴 내용이 들어가는데
            어떻게 될까요? 엄청 긴 내용이 들어가는데 어떻게 될까요? 엄청 긴
            내용이 들어가는데 어떻게 될까요?
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
            <Button variant="light" color="blue" fullWidth mt="s" radius="md">
              자세한 내용 보기
            </Button>
          </Group>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
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
            <Button variant="light" color="blue" fullWidth mt="s" radius="md">
              자세한 내용 보기
            </Button>
          </Group>
        </Card>
      </SimpleGrid>
    </>
  );
}
