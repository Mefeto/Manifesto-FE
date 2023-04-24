import Layout from "../components/layout";
import { Card, Container, Flex } from "@mantine/core";
import React, { useState } from "react";
import PropositionList from "../components/proposition-thumbnail";
import Search from "../components/search";
import SearchFilter from "../components/search-filter";
import { useInputState } from "@mantine/hooks";
import { committees } from "../lib/const/navigate";

export default function Home() {
  const [input, setInput] = useInputState("");
  const [filter, setFilter] = useState<string[]>(committees);
  return (
    <Layout>
      <Container mt={100} mb={80}>
        <Search setInput={setInput} />
      </Container>
      <Container size={"lg"}>
        <Flex gap={40} justify="center">
          <SearchFilter setFilter={setFilter} />
          <PropositionList filter={filter} input={input} />
        </Flex>
      </Container>
    </Layout>
  );
}
