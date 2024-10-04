import React, { useState } from 'react';
import { FaCheckCircle, FaClock } from 'react-icons/fa'; // Import icons for buttons

const TaskForm = ({ addOrUpdateTask, employees, taskToEdit }) => {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.taskName : '');
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : 'Medium');
  const [assignedTo, setAssignedTo] = useState(taskToEdit ? taskToEdit.assignedTo : '');
  const [notes, setNotes] = useState(taskToEdit ? taskToEdit.notes : '');
  const [status, setStatus] = useState(taskToEdit ? taskToEdit.status : 'Pending'); // Default status to 'Pending'

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateTask({ taskName, priority, assignedTo, notes, status }); // Include status in task object
    resetForm();
  };

  const resetForm = () => {
    setTaskName('');
    setPriority('Medium');
    setAssignedTo('');
    setNotes('');
    setStatus('Pending'); // Reset status to 'Pending'
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#F0F4F8] dark:bg-[#1F2F41] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#2B3A42] dark:text-white">
        {taskToEdit ? 'Edit Task' : 'Add Task'}
      </h2>
      <div className="mb-4">
        <label className="block text-[#7A8B97] dark:text-[#C7D0D8] mb-2">Task Name</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 w-full bg-white dark:bg-[#2C3E50] dark:text-white dark:border-[#55677B]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[#7A8B97] dark:text-[#C7D0D8] mb-2">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full bg-white dark:bg-[#2C3E50] dark:text-white dark:border-[#55677B]"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-[#7A8B97] dark:text-[#C7D0D8] mb-2">Assigned To</label>
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full bg-white dark:bg-[#2C3E50] dark:text-white dark:border-[#55677B]"
        >
          {employees.map(employee => (
            <option key={employee.id} value={employee.name}>{employee.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-[#7A8B97] dark:text-[#C7D0D8] mb-2">Status</label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setStatus('Pending')}
            className={`flex items-center p-2 rounded border transition-colors ${status === 'Pending' ? 'bg-[#3A7CA5] text-white' : 'border-gray-300 text-[#7A8B97] dark:text-[#C7D0D8] dark:border-[#55677B] dark:bg-[#2C3E50]'}`}
          >
            <FaClock className="mr-2" />
            Pending
          </button>
          <button
            type="button"
            onClick={() => setStatus('Completed')}
            className={`flex items-center p-2 rounded border transition-colors ${status === 'Completed' ? 'bg-[#3A7CA5] text-white' : 'border-gray-300 text-[#7A8B97] dark:text-[#C7D0D8] dark:border-[#55677B] dark:bg-[#2C3E50]'}`}
          >
            <FaCheckCircle className="mr-2" />
            Completed
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[#7A8B97] dark:text-[#C7D0D8] mb-2">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full bg-white dark:bg-[#2C3E50] dark:text-white dark:border-[#55677B]"
          rows="3"
        />
      </div>
      <button
        type="submit"
        className="bg-[#3A7CA5] text-white px-4 py-2 rounded hover:bg-[#9DD9D2] transition-colors"
      >
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
