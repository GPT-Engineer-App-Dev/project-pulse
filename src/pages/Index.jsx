import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, IconButton, Box, Heading } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditingText(task.text);
  };

  const editTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: editingText } : task)));
    setEditingTask(null);
    setEditingText("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="2xl" mb={6}>The Ultimate Todo List Extravaganza!</Heading>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="green">
            Add Task
          </Button>
        </HStack>
        <VStack spacing={3} width="100%">
          {tasks.map((task) => (
            <HStack key={task.id} width="100%" justifyContent="space-between">
              {editingTask === task.id ? (
                <Input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => editTask(task.id)}
                  autoFocus
                />
              ) : (
                <Text>{task.text}</Text>
              )}
              <HStack>
                <IconButton
                  icon={<FaEdit />}
                  onClick={() => startEditing(task)}
                  aria-label="Edit Task"
                />
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => deleteTask(task.id)}
                  aria-label="Delete Task"
                />
              </HStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;