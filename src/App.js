// import TaskItemFunctional from './components/TaskItemFunctional';
// import TaskItemClass from './components/TaskItemClass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Feature from './pages/Feature';
import About from './pages/About';
// import TaskList from './components/TaskList';
// import sampleTasks from './data/SampleTasks';

// const sampleTask = {
//   id: 1,
//   title: 'Học React Router',
//   description: 'Hoàn thành LO5',
//   status: 'pending',
//   dueDate: '2026-06-20',
// };

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Container>
         {/* <h2 className="mb-3">Task List</h2>
         <TaskList tasks={sampleTasks} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;