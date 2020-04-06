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
        <app-i18n code="entities.bed.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.bed.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-bed-view-toolbar v-if="record"></app-bed-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-file :label="fields.attachments.label" :value="presenter(record, 'attachments')"></app-view-item-file>

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
import BedViewToolbar from '@/modules/bed/components/bed-view-toolbar.vue';
import { BedModel } from '@/modules/bed/bed-model';

const { fields } = BedModel;

export default {
  name: 'app-bed-view-page',

  props: ['id'],

  components: {
    [BedViewToolbar.name]: BedViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'bed/view/record',
      loading: 'bed/view/loading',
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
      doFind: 'bed/view/doFind',
    }),

    presenter(record, fieldName) {
      return BedModel.presenter(record, fieldName);
    },
  },
};
</script>
