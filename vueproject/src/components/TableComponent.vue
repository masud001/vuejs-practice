<template>
  <table class="table">
    <thead>
    <tr>
      <template  v-for="column of columns">
      <th scope="col">
        {{column.label}}
      </th>
      </template>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row of rows">
      <template  v-for="column of columns">
        <td scope="col">
          {{row[column.name]}}
        </td>
      </template>
    </tr>

    </tbody>
  </table>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IColumn, iRow} from "@/interfaces/iColumn";

export default defineComponent({
  name: "TableComponent",
  props:{
    columns:{
      type:Object as PropType<Array<IColumn>>,
      required:true
    },
    rows:{
      type :Object as PropType<Array<iRow>>,
      required:true
    }

  }
});
</script>

<style scoped>

</style>