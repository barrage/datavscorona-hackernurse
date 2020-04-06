<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.respirator.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.respirator.list.title"></app-i18n>
      </h1>

      <app-respirator-list-toolbar></app-respirator-list-toolbar>
      <app-respirator-list-filter></app-respirator-list-filter>
      <app-respirator-list-table></app-respirator-list-table>
    </div>
  </div>
</template>

<script>
import RespiratorListFilter from '@/modules/respirator/components/respirator-list-filter.vue';
import RespiratorListTable from '@/modules/respirator/components/respirator-list-table.vue';
import RespiratorListToolbar from '@/modules/respirator/components/respirator-list-toolbar.vue';

export default {
  name: 'app-respirator-list-page',

  components: {
    [RespiratorListFilter.name]: RespiratorListFilter,
    [RespiratorListTable.name]: RespiratorListTable,
    [RespiratorListToolbar.name]: RespiratorListToolbar,
  },
};
</script>

<style>
</style>
