<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.bed.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.bed.list.title"></app-i18n>
      </h1>

      <app-bed-list-toolbar></app-bed-list-toolbar>
      <app-bed-list-filter></app-bed-list-filter>
      <app-bed-list-table></app-bed-list-table>
    </div>
  </div>
</template>

<script>
import BedListFilter from '@/modules/bed/components/bed-list-filter.vue';
import BedListTable from '@/modules/bed/components/bed-list-table.vue';
import BedListToolbar from '@/modules/bed/components/bed-list-toolbar.vue';

export default {
  name: 'app-bed-list-page',

  components: {
    [BedListFilter.name]: BedListFilter,
    [BedListTable.name]: BedListTable,
    [BedListToolbar.name]: BedListToolbar,
  },
};
</script>

<style>
</style>
