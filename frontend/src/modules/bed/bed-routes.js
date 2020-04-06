import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const BedListPage = () =>
  import('@/modules/bed/components/bed-list-page.vue');
const BedFormPage = () =>
  import('@/modules/bed/components/bed-form-page.vue');
const BedViewPage = () =>
  import('@/modules/bed/components/bed-view-page.vue');
const BedImporterPage = () =>
  import('@/modules/bed/components/bed-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'bed',
        path: '/bed',
        component: BedListPage,
        meta: {
          auth: true,
          permission: Permissions.values.bedView,
        },
      },
      {
        name: 'bedNew',
        path: '/bed/new',
        component: BedFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.bedCreate,
        },
      },
      {
        name: 'bedImporter',
        path: '/bed/import',
        component: BedImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.bedImport,
        },
      },
      {
        name: 'bedEdit',
        path: '/bed/:id/edit',
        component: BedFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.bedEdit,
        },
        props: true,
      },
      {
        name: 'bedView',
        path: '/bed/:id',
        component: BedViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.bedView,
        },
        props: true,
      },
    ],
  },
];
