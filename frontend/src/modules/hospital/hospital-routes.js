import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const HospitalListPage = () =>
  import('@/modules/hospital/components/hospital-list-page.vue');
const HospitalFormPage = () =>
  import('@/modules/hospital/components/hospital-form-page.vue');
const HospitalViewPage = () =>
  import('@/modules/hospital/components/hospital-view-page.vue');
const HospitalImporterPage = () =>
  import('@/modules/hospital/components/hospital-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'hospital',
        path: '/hospital',
        component: HospitalListPage,
        meta: {
          auth: true,
          permission: Permissions.values.hospitalView,
        },
      },
      {
        name: 'hospitalNew',
        path: '/hospital/new',
        component: HospitalFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.hospitalCreate,
        },
      },
      {
        name: 'hospitalImporter',
        path: '/hospital/import',
        component: HospitalImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.hospitalImport,
        },
      },
      {
        name: 'hospitalEdit',
        path: '/hospital/:id/edit',
        component: HospitalFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.hospitalEdit,
        },
        props: true,
      },
      {
        name: 'hospitalView',
        path: '/hospital/:id',
        component: HospitalViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.hospitalView,
        },
        props: true,
      },
    ],
  },
];
