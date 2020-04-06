import importerStore from '@/shared/importer/importer-store';
import { BedService } from '@/modules/bed/bed-service';
import bedImporterFields from '@/modules/bed/bed-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  BedService.import,
  bedImporterFields,
  i18n('entities.bed.importer.fileName'),
  i18n('entities.bed.importer.hint'),
);
