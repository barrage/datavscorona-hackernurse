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
        <app-i18n code="entities.staff.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.staff.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.staff.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.staff.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-staff-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!findLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import StaffForm from '@/modules/staff/components/staff-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-staff-form-page',

  props: ['id'],

  components: {
    [StaffForm.name]: StaffForm,
  },

  computed: {
    ...mapGetters({
      record: 'staff/form/record',
      findLoading: 'staff/form/findLoading',
      saveLoading: 'staff/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }
  },

  methods: {
    ...mapActions({
      doFind: 'staff/form/doFind',
      doNew: 'staff/form/doNew',
      doUpdate: 'staff/form/doUpdate',
      doCreate: 'staff/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/staff');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
};
</script>

<style>
</style>
