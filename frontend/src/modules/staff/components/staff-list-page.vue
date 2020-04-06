<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.staff.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.staff.list.title"></app-i18n>
      </h1>

      <app-staff-list-toolbar></app-staff-list-toolbar>
      <app-staff-list-filter></app-staff-list-filter>
      <app-staff-list-table></app-staff-list-table>
    </div>
  </div>
</template>

<script>
import StaffListFilter from '@/modules/staff/components/staff-list-filter.vue';
import StaffListTable from '@/modules/staff/components/staff-list-table.vue';
import StaffListToolbar from '@/modules/staff/components/staff-list-toolbar.vue';

export default {
  name: 'app-staff-list-page',

  components: {
    [StaffListFilter.name]: StaffListFilter,
    [StaffListTable.name]: StaffListTable,
    [StaffListToolbar.name]: StaffListToolbar,
  },
};
</script>

<style>
</style>
