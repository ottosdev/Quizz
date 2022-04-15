import { Box, Flex, Heading } from "@chakra-ui/react";
import { QuestionsProps } from "../../App";

interface HeaderQuestionProps {
  currentQuestion: number;
  animes: QuestionsProps[];
}
export function HeaderQuestion({
  animes,
  currentQuestion,
}: HeaderQuestionProps) {
  return (
    
    <>
      <Flex justifyContent="space-between" marginTop="3">
        <Heading>{currentQuestion + 1} / {animes.length}</Heading>
        <Heading>{animes[currentQuestion].question}</Heading>
        <Box></Box>
      </Flex>
    </>
  );
}
