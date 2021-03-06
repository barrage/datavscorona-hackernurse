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

      <el-table-column :label="fields.id.label" :prop="fields.id.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'id') }}</template>
      </el-table-column>

      <el-table-column :label="fields.user.label" :prop="fields.user.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.user.label"
            :permission="fields.user.readPermission"
            :url="fields.user.viewUrl"
            :value="presenter(scope.row, 'user')"
          ></app-list-item-relation-to-one>
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
            <router-link :to="`/staff/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/staff/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { StaffModel } from '@/modules/staff/staff-model';
import { mapGetters, mapActions } from 'vuex';
import { StaffPermissions } from '@/modules/staff/staff-permissions';
import { i18n } from '@/i18n';

const { fields } = StaffModel;

export default {
  name: 'app-staff-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'staff/list/rows',
      count: 'staff/list/count',
      loading: 'staff/list/loading',
      pagination: 'staff/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'staff/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new StaffPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new StaffPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'staff/list/doChangeSort',
      doChangePaginationCurrentPage:
        'staff/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'staff/list/doChangePaginationPageSize',
      doMountTable: 'staff/list/doMountTable',
      doDestroy: 'staff/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return StaffModel.presenter(row, fieldName);
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
