import hospitalListStore from '@/modules/hospital/hospital-list-store';
import hospitalViewStore from '@/modules/hospital/hospital-view-store';
import hospitalImporterStore from '@/modules/hospital/hospital-importer-store';
import hospitalFormStore from '@/modules/hospital/hospital-form-store';
import hospitalDestroyStore from '@/modules/hospital/hospital-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: hospitalDestroyStore,
    form: hospitalFormStore,
    list: hospitalListStore,
    view: hospitalViewStore,
    importer: hospitalImporterStore,
  },
};
