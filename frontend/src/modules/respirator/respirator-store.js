import respiratorListStore from '@/modules/respirator/respirator-list-store';
import respiratorViewStore from '@/modules/respirator/respirator-view-store';
import respiratorImporterStore from '@/modules/respirator/respirator-importer-store';
import respiratorFormStore from '@/modules/respirator/respirator-form-store';
import respiratorDestroyStore from '@/modules/respirator/respirator-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: respiratorDestroyStore,
    form: respiratorFormStore,
    list: respiratorListStore,
    view: respiratorViewStore,
    importer: respiratorImporterStore,
  },
};
