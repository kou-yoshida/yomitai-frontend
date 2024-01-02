"use client";

import {
  SimpleGrid,
  Box,
  Tabs,
  TabList as _TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text
} from "@chakra-ui/react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import { UnCompleted } from "../models/UnCompleted";
import { Completed } from "../models/Completed";

export default function TodoContainer({
  todoList,
  tabOptions,
  completeList,
  onOpen,
  isOpen
}: {
  todoList: UnCompleted[];
  completeList: Completed[];
  tabOptions: string[];
  onOpen: (isOpen: boolean, memo: string) => void;
  isOpen: boolean;
}) {
  return (
    <Tabs isFitted variant="enclosed">
      <_TabList mb="1em" fontWeight={600}>
        {tabOptions.map((option) => (
          <Tab key={option} fontSize={["smaller", "medium"]}>
            <Text as="b">{option}</Text>
          </Tab>
        ))}
      </_TabList>
      <TabPanels>
        <TabPanel>
          <SimpleGrid
            columns={{ sm: 1, md: 3, lg: 4 }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {todoList.map((todo) => (
              <Box key={todo.id}>
                <TodoItem onOpen={onOpen} isOpen={isOpen} todo={todo} />
              </Box>
            ))}
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleGrid
            columns={{ sm: 1, md: 3, lg: 4 }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {completeList.map((todo) => (
              <Box key={todo.id}>
                <TodoItem isOpen={isOpen} onOpen={onOpen} todo={todo} />
              </Box>
            ))}
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
