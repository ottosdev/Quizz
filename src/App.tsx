import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Divider,
} from "@chakra-ui/react";
import {} from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { api } from "./service/api";
import OnePiece from "./assets/one.jpg";
import { HeaderQuestion } from "./components/HeaderQuestion";
import { AnswserQuestion } from "./components/AnwserQuestion";
import { Score } from "./components/Score";

export interface QuestionsProps {
  question: string;
  answerOptions: {
    text: string;
    isCorrect: boolean;
  }[];
}

function App() {
  const [animes, setAnimes] = useState<QuestionsProps[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (loading) {
        const response = await api.get("/animes");
        const data = response.data;
        setAnimes(data);
        console.log(data);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  function handleChangeCorrectAnswer(isCorrect: boolean) {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < animes.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <Flex
      backgroundImage={OnePiece}
      backgroundSize="cover"
      height="100vh"
      align="center"
      justify="center"
    >
      <Container
        width="80%"
        maxW="1200px"
        backgroundColor="#ffffff60"
        borderRadius="3xl"
        height="280px"
        display="flex"
        flexDir="column"
        
      >
        {showScore ? (
          <Score animes={animes} score={score}/>
        ) : (
          !loading && (
            <>
              <HeaderQuestion animes={animes} currentQuestion={currentQuestion} />
              <Divider
                marginTop="1"
                marginBottom="1"
                width="100%"
                borderWidth="2px"
              />
              <AnswserQuestion
                animes={animes}
                currentQuestion={currentQuestion}
                handleChangeCorrectAnswer={handleChangeCorrectAnswer}
              />
            </>
          )
        )}
      </Container>
    </Flex>
  );
}

export default App;
