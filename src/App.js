// import TaskItemFunctional from './components/TaskItemFunctional';
// import TaskItemClass from './components/TaskItemClass';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import TaskList from './components/TaskList';
import sampleTasks from './data/SampleTasks';

// const sampleTask = {
//   id: 1,
//   title: 'Học React Router',
//   description: 'Hoàn thành LO5',
//   status: 'pending',
//   dueDate: '2026-06-20',
// };

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <h2 className="mb-3">Task List</h2>
        <TaskList tasks={sampleTasks} />
      </Container>
    </div>
  );
}

export default App;