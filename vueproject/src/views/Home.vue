<template>
  <div class="container">
    <div class="row pb-5 mb-5 mt-4">
      <div class="col-12">
        <!--    table -->
        <TableComponent :columns="columns" :rows="users"/>
        <TableComponent :columns="saleColumns" :rows="sales"/>
        <TableComponent :columns="productColumn" :rows="products"/>
      </div>
    </div>


    <!--    <div class="row">-->
    <!--      &lt;!&ndash;registration form &ndash;&gt;-->
    <!--      <div class="col-md-6">-->
    <!--        <Registration @submit="onSubmit"/>-->
    <!--      </div>-->
    <!--      <div class="col-md-6">-->
    <!--      <LogIn/>-->
    <!--      </div>-->
    <!--    </div>-->


  </div>


  <!--  <template v-for="usr in users">-->
  <!--    <user-view v-if="usr.age > 25" :user="usr"/>-->
  <!--  </template>-->
  <!--  <btn label="Sign Up"/>-->
  <!--  <btn label="Sign In"/>-->
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import UserView from "@/components/User.vue";
import {IUser} from "@/interfaces/iUser";
import Btn from "@/components/Btn.vue";
import Registration from "@/components/Registration.vue";
import {IViewUser} from "@/interfaces/iViewUser";
import LogIn from "@/components/LogIn.vue";
import TableComponent from "@/components/TableComponent.vue";
import {IColumn} from "@/interfaces/iColumn";
import {ISale} from "@/interfaces/iSalseCol";
import {IProducts} from "@/interfaces/iProducts";

export default defineComponent({
  name: 'Home',
  components: { TableComponent, LogIn, Registration, Btn, UserView},
  setup() {
    let productColumn: IColumn[] = [
      {name:"productName",label:"Product Name"},
      {name:"productPrice",label:"Product Price"},
      {name:"productCategory",label:"Product Category"},
    ];
    let products:Array<IProducts>=[
      {productName:"Mobile",productPrice:30000,productCategory:"Electronics"},
      {productName:"Shirt",productPrice:25000,productCategory:"Cloth"},
      {productName:"Mouse",productPrice:300,productCategory:"Electronics"},
      {productName:"Bed",productPrice:8000,productCategory:"Furniture"},

    ];
    let saleColumns: IColumn[] = [
      {name: "item", label: "Product Name"},
      {name: "price", label: "Product Price"},
    ];
    let sales:Array<ISale> = [
      {item:"Mobile",price:30000},
      {item:"TV",price:40000},
      {item:"Laptop",price:90000},
    ]

    let columns: IColumn[] = [{
      name: 'name',
      label: "Name"
    }, {
      name: "age",
      label: "Age"
    }];
    let users: Array<IUser> = [
          {name: "masud", age: 30,},
          {name: "rahman", age: 20},
          {name: "brinta", age: 25},
          {name: "saiful", age: 30},
          {name: "shawon", age: 40},
        ];
    let val = ref<string>('')
    return {
      columns, users,
      val,
      saleColumns,
      sales,
      productColumn,
      products,
      onSubmit(user: IViewUser) {
        console.log(user);
      }
    }
  }
});
</script>
