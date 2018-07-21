import { CardsLayout } from '../cards-layout';
import { Card } from '../cards';
export default () => (
  <CardsLayout>
    <Card title="Sketch & Studio plugin" image="dsm/sketch-studio-plugin">
      Transform static designs into versatile, clickable prototypes without
      writing a single line of code.
    </Card>
    <Card title="Library version control" image="dsm/library-version-control">
      Changes sync to the whole team, and designers can switch to latest version
      or roll back changes at any time.
    </Card>
    <Card title="API access" image="dsm/api-access">
      Work through design ideas in real time with an infinite collaborative
      space for your team.
    </Card>
    <Card title="Roles & permissions" image="dsm/roles-permissions">
      Roles and permissions provide complete control over who can view or edit
      each library within the system.
    </Card>
    <Card title="Public microsite" image="dsm/custom-microsite">
      InVision’s Design System Manager guarantees instant access to your team’s
      global shared component libraries
    </Card>
  </CardsLayout>
);
