import { Center, Input, Stack, Text } from "@mantine/core";
import { useInputState } from "@mantine/hooks";

function Search({
  setInput,
}: {
  setInput: (value: string | React.ChangeEvent<any> | null | undefined) => void;
}) {
  return (
    <Center>
      <Stack>
        <Text c="black" align="center" size={24} my={10}>
          발의안 정보를 검색해보세요!
        </Text>
        <Input
          placeholder="발의대표자명, 발의안명, 소관위원회를 입력해보세요!"
          w={540}
          radius="xl"
          size="md"
          onChange={(e) => setInput(e.target.value)}
        />
      </Stack>
    </Center>
  );
}

export default Search;
