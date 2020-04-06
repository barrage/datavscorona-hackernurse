<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/staff' }">
        <app-i18n code="entities.staff.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.staff.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.staff.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-staff-view-toolbar v-if="record"></app-staff-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.user.label"
          :permission="fields.user.readPermission"
          :url="fields.user.viewUrl"
          :value="presenter(record, 'user')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.hospital.label"
          :permission="fields.hospital.readPermission"
          :url="fields.hospital.viewUrl"
          :value="presenter(record, 'hospital')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import StaffViewToolbar from '@/modules/staff/components/staff-view-toolbar.vue';
import { StaffModel } from '@/modules/staff/staff-model';

const { fields } = StaffModel;

export default {
  name: 'app-staff-view-page',

  props: ['id'],

  components: {
    [StaffViewToolbar.name]: StaffViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'staff/view/record',
      loading: 'staff/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'staff/view/doFind',
    }),

    presenter(record, fieldName) {
      return StaffModel.presenter(record, fieldName);
    },
  },
};
</script>
