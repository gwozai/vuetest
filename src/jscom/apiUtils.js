// apiUtils.js

const apiUtils = {
    apiURL: process.env.NODE_ENV === 'production' ? 'https://myjsapi.gwozai.com' : 'http://localhost:5000',
  
    async testCreateTask(title, description, completed) {
        const requestData = {
            title: title,
            description: description,
            completed: completed
        };
    
        try {
            const response = await fetch(`${this.apiURL}/create_task`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            const data = await response.json();
            if (response.status === 200) {
                console.log("Task created successfully:", data.task);
            } else {
                console.log("Failed to create task:", data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    },
    
  
    async testGetAllTasks() {
      try {
        const response = await fetch(`${this.apiURL}/get_all_tasks`);
        const data = await response.json();
        if (response.status === 200) {
          console.log("All tasks:", data.tasks);
        } else {
          console.log("Failed to get all tasks:", data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  
    async testGetTaskById(taskId) {
      try {
        const response = await fetch(`${this.apiURL}/get_task/${taskId}`);
        const data = await response.json();
        if (response.status === 200) {
          console.log(`Task with ID ${taskId}:`, data.task);
        } else {
          console.log(`Failed to get task by ID ${taskId}:`, data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  
    async testUpdateTask(taskId) {
      try {
        const updatedData = { title: 'Updated Task', completed: true };
        const response = await fetch(`${this.apiURL}/update_task/${taskId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData)
        });
        const data = await response.json();
        if (response.status === 200) {
          console.log("Task updated successfully:", data.task);
        } else {
          console.log("Failed to update task:", data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  
    async testDeleteTask(taskId) {
      try {
        const response = await fetch(`${this.apiURL}/delete_task/${taskId}`, { method: 'DELETE' });
        const data = await response.json();
        if (response.status === 200) {
          console.log("Task deleted successfully");
        } else {
          console.log("Failed to delete task:", data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  export default apiUtils;
  