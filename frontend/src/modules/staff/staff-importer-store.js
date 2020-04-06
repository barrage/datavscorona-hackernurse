import importerStore from '@/shared/importer/importer-store';
import { StaffService } from '@/modules/staff/staff-service';
import staffImporterFields from '@/modules/staff/staff-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  StaffService.import,
  staffImporterFields,
  i18n('entities.staff.importer.fileName'),
  i18n('entities.staff.importer.hint'),
);
