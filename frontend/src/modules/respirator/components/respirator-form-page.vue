<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/respirator' }">
        <app-i18n code="entities.respirator.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.respirator.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.respirator.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.respirator.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.respirator.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-respirator-form
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
import RespiratorForm from '@/modules/respirator/components/respirator-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-respirator-form-page',

  props: ['id'],

  components: {
    [RespiratorForm.name]: RespiratorForm,
  },

  computed: {
    ...mapGetters({
      record: 'respirator/form/record',
      findLoading: 'respirator/form/findLoading',
      saveLoading: 'respirator/form/saveLoading',
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
      doFind: 'respirator/form/doFind',
      doNew: 'respirator/form/doNew',
      doUpdate: 'respirator/form/doUpdate',
      doCreate: 'respirator/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/respirator');
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
