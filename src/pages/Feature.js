import React from 'react';
import TaskList from '../components/TaskList';
import SampleTasks from '../data/SampleTasks';

const Feature = () => {
  const [tasks, setTasks] = useState(SampleTasks);

  useEffect(() => {
    const pendingCount = tasks.filter((task) => task.status === 'pending').length;
    document.title = `Task Tracker (${pendingCount} pending)`;
  }, [tasks]);

  const handleToggleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'done' ? 'pending' : 'done' }
          : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2 className="mb-3">Task List</h2>
      <TaskList tasks={tasks} onToggleStatus={handleToggleStatus} onDelete={handleDelete} />
    </div>
  );
};

export default Feature;