import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { QuestionsProps } from "../../App";

interface HeaderQuestionProps {
  animes: QuestionsProps[];
  currentQuestion: number;
  handleChangeCorrectAnswer: (isCorrect: boolean) => void;
}

export function AnswserQuestion({
  animes,
  currentQuestion,
  handleChangeCorrectAnswer,
}: HeaderQuestionProps) {
  return (
    <Flex align="center" gap="12px" height="100%" justify="center">
      {animes[currentQuestion].answerOptions.map((item, index) => (
        <Button
          width="3xs"
          bgColor="green.200"
          colorScheme="whatsapp"
          key={index}
          onClick={() => handleChangeCorrectAnswer(item.isCorrect)}
        >
          {item.text}
        </Button>
      ))}
    </Flex>
  );
}
