<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column :label="fields.name.label" :prop="fields.name.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'name') }}</template>
      </el-table-column>

      <el-table-column :label="fields.hospital.label" :prop="fields.hospital.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.hospital.label"
            :permission="fields.hospital.readPermission"
            :url="fields.hospital.viewUrl"
            :value="presenter(scope.row, 'hospital')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.attachments.label" :prop="fields.attachments.name" align="center">
        <template slot-scope="scope">
          <app-list-item-file :value="presenter(scope.row, 'attachments')"></app-list-item-file>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/bed/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/bed/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { BedModel } from '@/modules/bed/bed-model';
import { mapGetters, mapActions } from 'vuex';
import { BedPermissions } from '@/modules/bed/bed-permissions';
import { i18n } from '@/i18n';

const { fields } = BedModel;

export default {
  name: 'app-bed-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'bed/list/rows',
      count: 'bed/list/count',
      loading: 'bed/list/loading',
      pagination: 'bed/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'bed/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new BedPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new BedPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'bed/list/doChangeSort',
      doChangePaginationCurrentPage:
        'bed/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'bed/list/doChangePaginationPageSize',
      doMountTable: 'bed/list/doMountTable',
      doDestroy: 'bed/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return BedModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
