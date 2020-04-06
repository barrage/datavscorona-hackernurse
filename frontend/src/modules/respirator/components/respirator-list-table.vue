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

      <el-table-column
        :label="fields.name.label"
        :prop="fields.name.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'name') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.photos.label"
        :prop="fields.photos.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'photos')"></app-list-item-image>
        </template>
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

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/respirator/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/respirator/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { RespiratorModel } from '@/modules/respirator/respirator-model';
import { mapGetters, mapActions } from 'vuex';
import { RespiratorPermissions } from '@/modules/respirator/respirator-permissions';
import { i18n } from '@/i18n';

const { fields } = RespiratorModel;

export default {
  name: 'app-respirator-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'respirator/list/rows',
      count: 'respirator/list/count',
      loading: 'respirator/list/loading',
      pagination: 'respirator/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'respirator/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new RespiratorPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new RespiratorPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'respirator/list/doChangeSort',
      doChangePaginationCurrentPage:
        'respirator/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'respirator/list/doChangePaginationPageSize',
      doMountTable: 'respirator/list/doMountTable',
      doDestroy: 'respirator/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return RespiratorModel.presenter(row, fieldName);
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
