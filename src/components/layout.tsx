import React, { ReactNode, useState } from "react";
import {
  AppShell,
  Group,
  Header,
  Input,
  Navbar,
  NavLink,
  ScrollArea,
  Text,
} from "@mantine/core";
import { navData } from "../lib/const/navigate";
import { useNavigate } from "react-router-dom";

function Layout({ children }: { children: ReactNode }) {
  const router = useNavigate();
  return (
    <AppShell
      padding="md"
      navbar={<></>}
      header={
        <Header height={60} p="xs">
          <Group position="left" h={"100%"}>
            <Text
              size="xl"
              color="black"
              weight="bold"
              onClick={() => router("/")}
              sx={{ cursor: "pointer" }}
            >
              Project Manifesto
            </Text>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
          paddingLeft: 0,
          paddingRight: 0,
        },
      })}
    >
      {children}
    </AppShell>
  );
}

export default Layout;
