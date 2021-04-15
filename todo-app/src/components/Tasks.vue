<template>
  <ul dense bordered padding class="rounded-borders">
    <li v-for="(task, index) in tasks" :key="task.name">
      <div class=" q-ma-none text-h6 text-weight-bolder">
        {{ task.name }}
        <q-badge color="purple" class=" q-ml-lg "
          >index is : {{ index }}</q-badge
        >
        <q-btn
          @click="deleteItem(index)"
          label="delete"
          color="black"
          class=" q-ml-md "
        />
      </div>
      <div class="q-ma-none text-weight-thin">
        Due Date : {{ task.dueDate }}
      </div>
      <div class="q-ma-none text-weight-thin">
        Start Date : {{ task.startDate }}
      </div>
      <div class="q-ma-none text-weight-thin">
        and Time : {{ task.dueTime }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["task", "index"],
  data() {
    return {
      tasks: [
        {
          name: "task-1",
          dueDate: "10/04/2021",
          startDate: "09/04/2021",
          dueTime: "06:30 AM"
        },
        {
          name: "task - 2",
          dueDate: "10/04/2021",
          startDate: "09/04/2021",
          dueTime: "06:30 AM"
        },
        {
          name: "task - 3",
          dueDate: "10/04/2021",
          startDate: "09/04/2021",
          dueTime: "06:30 AM"
        },
        {
          name: "task - 4",
          dueDate: "10/04/2021",
          startDate: "09/04/2021",
          dueTime: "06:30 AM"
        },
        {
          name: "task - 5",
          dueDate: "10/04/2021",
          startDate: "09/04/2021",
          dueTime: "06:30 AM"
        }
      ]
    };
  },
  methods: {
    deleteItem(index) {
      console.log("index number : ", index);
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style></style>
