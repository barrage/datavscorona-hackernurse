import routes from '@/modules/hospital/hospital-routes';
import store from '@/modules/hospital/hospital-store';
import HospitalAutocompleteInput from '@/modules/hospital/components/hospital-autocomplete-input';

export default {
  components: [HospitalAutocompleteInput],
  routes,
  store,
};
