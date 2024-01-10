import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Button,
  Grid,
  GridItem,
  FormErrorMessage
} from "@chakra-ui/react";
import TodoContainer from "../components/TodoContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function PageTodoList() {
  // プレースホルダー画像
  const url = "https://placehold.jp/500x400.png";
  const [imageUrl, setImageUrl] = useState(url);

  const schema = z.object({
    url: z
      .string({
        required_error: "URLを入力してください",
        invalid_type_error: "URLが正しくありません"
      })
      .min(1, "URLを入力してください")
      .url("URLが正しくありません")
  });

  const { register, watch, handleSubmit, formState } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  });

  const onSubmit = handleSubmit(
    (values) => {
      console.log(values);
    },
    (e) => {
      console.log(e, "失敗");
    }
  );

  const [isOpen, setIsOpen] = useState(false);
  const [memo, setMemo] = useState("");

  const onOpen = (isOpen: boolean, memo: string) => {
    setIsOpen(isOpen);
    setMemo(memo);
  };
  return (
    <>
      <Box m={10}>
        <Box
          display="flex"
          gap={4}
          width="100%"
          maxW={700}
          justifyContent="center"
          marginBottom={20}
          marginX="auto"
        >
          <FormControl isInvalid={!!formState.errors.url}>
            <Input type="url" placeholder="https://example.com" {...register("url")} />
            <FormErrorMessage>
              {formState.errors.url && formState.errors.url.message}
            </FormErrorMessage>
          </FormControl>

          <Button onClick={onSubmit}>登録</Button>
        </Box>

        <TodoContainer
          onOpen={onOpen}
          isOpen={isOpen}
          tabOptions={["読みたい！", "完全に理解した"]}
          todoList={[
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            }
          ]}
          completeList={[
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: true,
              imageUrl: imageUrl,
              externalUrl: "https://google.com",
              memo: "短いテキスト"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: true,
              imageUrl: imageUrl,
              externalUrl: "https://google.com",
              memo: "記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: true,
              imageUrl: imageUrl,
              externalUrl: "https://google.com",
              memo: "記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど"
            },
            {
              id: 1,
              title: "テストテスト、テストテスト",
              completed: true,
              imageUrl: imageUrl,
              externalUrl: "https://google.com",
              memo: "記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど"
            }
          ]}
        />
      </Box>

      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          pt="0px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
          maxH={400}
          overflowY="scroll"
        >
          <Box textAlign="right" marginY={5}>
            <CloseIcon onClick={() => setIsOpen(false)} cursor="pointer" />
          </Box>
          {memo}
        </Box>
      </Slide>
    </>
  );
}
