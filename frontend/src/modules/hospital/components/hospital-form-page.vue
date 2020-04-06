<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hospital' }">
        <app-i18n code="entities.hospital.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.hospital.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.hospital.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.hospital.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.hospital.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-hospital-form
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
import HospitalForm from '@/modules/hospital/components/hospital-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-hospital-form-page',

  props: ['id'],

  components: {
    [HospitalForm.name]: HospitalForm,
  },

  computed: {
    ...mapGetters({
      record: 'hospital/form/record',
      findLoading: 'hospital/form/findLoading',
      saveLoading: 'hospital/form/saveLoading',
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
      doFind: 'hospital/form/doFind',
      doNew: 'hospital/form/doNew',
      doUpdate: 'hospital/form/doUpdate',
      doCreate: 'hospital/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/hospital');
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
