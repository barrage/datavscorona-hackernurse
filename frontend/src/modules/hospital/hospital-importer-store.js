import importerStore from '@/shared/importer/importer-store';
import { HospitalService } from '@/modules/hospital/hospital-service';
import hospitalImporterFields from '@/modules/hospital/hospital-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  HospitalService.import,
  hospitalImporterFields,
  i18n('entities.hospital.importer.fileName'),
  i18n('entities.hospital.importer.hint'),
);
