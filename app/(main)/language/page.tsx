import ModulePage from '@/components/become-chinese/module-page';
import { MODULE_CONTENT } from '@/lib/content/modules';

export default function LanguagePage() {
  return <ModulePage moduleId="language" content={MODULE_CONTENT.language} />;
}
