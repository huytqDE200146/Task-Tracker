import React from 'react';
import TaskList from '../components/TaskList';
import SampleTasks from '../data/SampleTasks';

const Feature = () => {
  return (
    <div>
      <h2 className="mb-3">Task List</h2>
      <TaskList tasks={SampleTasks} />
    </div>
  );
};

export default Feature;