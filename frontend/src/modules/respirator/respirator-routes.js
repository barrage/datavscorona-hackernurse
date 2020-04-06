import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const RespiratorListPage = () =>
  import('@/modules/respirator/components/respirator-list-page.vue');
const RespiratorFormPage = () =>
  import('@/modules/respirator/components/respirator-form-page.vue');
const RespiratorViewPage = () =>
  import('@/modules/respirator/components/respirator-view-page.vue');
const RespiratorImporterPage = () =>
  import('@/modules/respirator/components/respirator-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'respirator',
        path: '/respirator',
        component: RespiratorListPage,
        meta: {
          auth: true,
          permission: Permissions.values.respiratorView,
        },
      },
      {
        name: 'respiratorNew',
        path: '/respirator/new',
        component: RespiratorFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.respiratorCreate,
        },
      },
      {
        name: 'respiratorImporter',
        path: '/respirator/import',
        component: RespiratorImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.respiratorImport,
        },
      },
      {
        name: 'respiratorEdit',
        path: '/respirator/:id/edit',
        component: RespiratorFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.respiratorEdit,
        },
        props: true,
      },
      {
        name: 'respiratorView',
        path: '/respirator/:id',
        component: RespiratorViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.respiratorView,
        },
        props: true,
      },
    ],
  },
];
