import React from "react";
import { Alert, Button, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

export default function PropositionOriginal({
  content,
  originalLink,
}: {
  content: string | undefined;
  originalLink: string | undefined;
}) {
  return (
    <>
      <Alert color="gray.6" styles={{ message: { marginBottom: 16 } }}>
        <Text
          style={{
            fontSize: 14,
            whiteSpace: "pre-wrap",
            lineHeight: 1.8,
            color: "#4e5968",
            fontWeight: 400,
          }}
        >
          {content}
        </Text>
        <Button
          component="a"
          href={originalLink}
          target="_blank"
          rel="noreferrer noopener"
          fullWidth
          mt={24}
          variant="outline"
        >
          원문 사이트 보러가기
        </Button>
      </Alert>
    </>
  );
}
