import staffListStore from '@/modules/staff/staff-list-store';
import staffViewStore from '@/modules/staff/staff-view-store';
import staffImporterStore from '@/modules/staff/staff-importer-store';
import staffFormStore from '@/modules/staff/staff-form-store';
import staffDestroyStore from '@/modules/staff/staff-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: staffDestroyStore,
    form: staffFormStore,
    list: staffListStore,
    view: staffViewStore,
    importer: staffImporterStore,
  },
};
