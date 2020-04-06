import routes from '@/modules/staff/staff-routes';
import store from '@/modules/staff/staff-store';
import StaffAutocompleteInput from '@/modules/staff/components/staff-autocomplete-input';

export default {
  components: [StaffAutocompleteInput],
  routes,
  store,
};
