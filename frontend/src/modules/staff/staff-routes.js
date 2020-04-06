import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const StaffListPage = () =>
  import('@/modules/staff/components/staff-list-page.vue');
const StaffFormPage = () =>
  import('@/modules/staff/components/staff-form-page.vue');
const StaffViewPage = () =>
  import('@/modules/staff/components/staff-view-page.vue');
const StaffImporterPage = () =>
  import('@/modules/staff/components/staff-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'staff',
        path: '/staff',
        component: StaffListPage,
        meta: {
          auth: true,
          permission: Permissions.values.staffView,
        },
      },
      {
        name: 'staffNew',
        path: '/staff/new',
        component: StaffFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.staffCreate,
        },
      },
      {
        name: 'staffImporter',
        path: '/staff/import',
        component: StaffImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.staffImport,
        },
      },
      {
        name: 'staffEdit',
        path: '/staff/:id/edit',
        component: StaffFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.staffEdit,
        },
        props: true,
      },
      {
        name: 'staffView',
        path: '/staff/:id',
        component: StaffViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.staffView,
        },
        props: true,
      },
    ],
  },
];
