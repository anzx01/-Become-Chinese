import ModulePage from '@/components/become-chinese/module-page';
import { MODULE_CONTENT } from '@/lib/content/modules';

export default function FoodPage() {
  return <ModulePage moduleId="food" content={MODULE_CONTENT.food} />;
}
