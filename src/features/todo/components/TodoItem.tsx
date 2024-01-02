"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Image,
  CardHeader
} from "@chakra-ui/react";
import { Todo } from "../models/Todo";
import { DeleteIcon, ExternalLinkIcon, EditIcon, ViewIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function TodoItem({
  todo,
  onOpen,
  isOpen
}: {
  todo: Todo;
  onOpen: (isOpen: boolean, memo: string) => void;
  isOpen: boolean;
}) {
  return (
    <Card>
      <CardHeader m={0} p={0} textAlign="right">
        <Button variant="ghost" colorScheme="blue" size="xs" m={2}>
          <CloseIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <Image src={todo.imageUrl} alt="" />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{todo.title}</Heading>
        </Stack>
      </CardBody>
      <Divider color="grey" />
      <CardFooter justifyContent="center" paddingY={2}>
        <ButtonGroup spacing="2">
          <Button
            variant="ghost"
            colorScheme="blue"
            flexDir="column"
            as={NextLink}
            href={`edit/${todo.id}`}
          >
            <EditIcon />

            <Text fontSize="xs" paddingTop={1}>
              編集
            </Text>
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            flexDir="column"
            as={NextLink}
            href={todo.externalUrl}
          >
            <ExternalLinkIcon />
            <Text fontSize="xs" paddingTop={1}>
              読む
            </Text>
          </Button>
          {todo.completed ? (
            <Button
              onClick={() => onOpen(true, todo.memo)}
              variant="ghost"
              colorScheme="blue"
              flexDir="column"
            >
              <ViewIcon />
              <Text fontSize="xs" paddingTop={1}>
                メモ
              </Text>
            </Button>
          ) : (
            <></>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
