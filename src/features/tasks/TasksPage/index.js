import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Buttons } from "./Buttons";
import { ExampleTasksButton } from "./ExampleTasksButton";
import { Section } from "../../../common/Section";
import { Header } from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { Search } from "./Search";

const TasksPage =() => {
  
  return (
       <Container>
      <Header title="Tasks list" />
      <Section
        title="Add new task"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />

      <Section title="Search" body={<Search />} />

      <Section
        title="A list of tasks"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
}

export { TasksPage };
