<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-capitalize">List of Users</h2>
        <table class="table mt-5">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Emails</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <RowComponent v-for="(user,i) in RegUsers" :user="user" :index="i+1">
            <!--slot application -->
            <template v-slot:firstName="{val,row}">
              mr. {{ val }}
              {{ row.password || "N/A" }}
            </template>

          </RowComponent>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IViewUser} from "@/interfaces/iViewUser";
import RowComponent from "@/components/RowComponent.vue";

export default defineComponent({
  name: "ViewUser",
  components: {RowComponent},
  setup() {
    let RegUsers: IViewUser[] = [
      {firstName: "masud", lastName: "rahman", email: "example@email.com", password: "434"},
      {firstName: "masud", lastName: "rahman", email: "example@email.com"},
      {firstName: "masud", lastName: "rahman", email: "example@email.com"},
      {firstName: "masud", lastName: "rahman", email: "example@email.com"},
    ]

    return {RegUsers}
  }
});
</script>

<style scoped>

</style>