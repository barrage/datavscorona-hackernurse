import bedListStore from '@/modules/bed/bed-list-store';
import bedViewStore from '@/modules/bed/bed-view-store';
import bedImporterStore from '@/modules/bed/bed-importer-store';
import bedFormStore from '@/modules/bed/bed-form-store';
import bedDestroyStore from '@/modules/bed/bed-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: bedDestroyStore,
    form: bedFormStore,
    list: bedListStore,
    view: bedViewStore,
    importer: bedImporterStore,
  },
};
