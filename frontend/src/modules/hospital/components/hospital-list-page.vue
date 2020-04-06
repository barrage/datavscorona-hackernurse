<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.hospital.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.hospital.list.title"></app-i18n>
      </h1>

      <app-hospital-list-toolbar></app-hospital-list-toolbar>
      <app-hospital-list-filter></app-hospital-list-filter>
      <app-hospital-list-table></app-hospital-list-table>
    </div>
  </div>
</template>

<script>
import HospitalListFilter from '@/modules/hospital/components/hospital-list-filter.vue';
import HospitalListTable from '@/modules/hospital/components/hospital-list-table.vue';
import HospitalListToolbar from '@/modules/hospital/components/hospital-list-toolbar.vue';

export default {
  name: 'app-hospital-list-page',

  components: {
    [HospitalListFilter.name]: HospitalListFilter,
    [HospitalListTable.name]: HospitalListTable,
    [HospitalListToolbar.name]: HospitalListToolbar,
  },
};
</script>

<style>
</style>
