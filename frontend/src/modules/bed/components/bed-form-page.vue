<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/bed' }">
        <app-i18n code="entities.bed.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.bed.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.bed.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.bed.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.bed.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-bed-form
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
import BedForm from '@/modules/bed/components/bed-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-bed-form-page',

  props: ['id'],

  components: {
    [BedForm.name]: BedForm,
  },

  computed: {
    ...mapGetters({
      record: 'bed/form/record',
      findLoading: 'bed/form/findLoading',
      saveLoading: 'bed/form/saveLoading',
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
      doFind: 'bed/form/doFind',
      doNew: 'bed/form/doNew',
      doUpdate: 'bed/form/doUpdate',
      doCreate: 'bed/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/bed');
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
