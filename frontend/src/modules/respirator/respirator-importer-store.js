import importerStore from '@/shared/importer/importer-store';
import { RespiratorService } from '@/modules/respirator/respirator-service';
import respiratorImporterFields from '@/modules/respirator/respirator-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  RespiratorService.import,
  respiratorImporterFields,
  i18n('entities.respirator.importer.fileName'),
  i18n('entities.respirator.importer.hint'),
);
