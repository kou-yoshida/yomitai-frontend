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
  const url =
    "https://res.cloudinary.com/zenn/image/upload/s--BkGSqkWY--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%2586%25E3%2582%25B9%25E3%2583%2588%25E3%2583%2595%25E3%2582%25A1%25E3%2582%25A4%25E3%2583%25AB%25E3%2582%2592%25E3%2583%2586%25E3%2583%25B3%25E3%2583%2597%25E3%2583%25AC%25E3%2583%25BC%25E3%2583%2588%25E3%2581%258B%25E3%2582%2589%25E8%2587%25AA%25E5%258B%2595%25E7%2594%259F%25E6%2588%2590%25E3%2581%2597%25E3%2581%259F%25E3%2581%2584%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Wizard%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0Y2d6ZlpGdXEwSHFxM1Rhd3NGRWxhdm5rTmQ3Q3lCWTBSdk9Fd3VhamFjPXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png";

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
              title: "本当は教えたくない、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: false,
              imageUrl: imageUrl,
              externalUrl: "https://google.com"
            }
          ]}
          completeList={[
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: true,
              imageUrl: imageUrl,
              externalUrl: "https://google.com",
              memo: "短いテキスト"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: true,
              imageUrl: imageUrl,
              externalUrl: "https://google.com",
              memo: "記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
              completed: true,
              imageUrl: imageUrl,
              externalUrl: "https://google.com",
              memo: "記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど記事を読んだ時の軽いメモなど"
            },
            {
              id: 1,
              title: "本当は教えたくない、テストテスト",
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
