import { Button, Flex, Heading } from "@chakra-ui/react";
import { QuestionsProps } from "../../App";
interface ScoreProps {
  score: number;
  animes: QuestionsProps[];
}

export function Score({ score, animes }: ScoreProps) {
  function reset() {
    window.location.reload();
  }

  return (
    <Flex
      align="center"
      justify="center"
      height="100%"
      flexDir="column"
      gap="24px"
    >
      <Heading>
        You got {score} out of {animes.length}
      </Heading>
      <Button width="30%" bgColor="red.200" colorScheme="red" onClick={reset}>
        Reset
      </Button>
    </Flex>
  );
}
