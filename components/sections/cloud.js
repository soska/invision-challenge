import { CardsLayout } from '../cards-layout';
import { Card } from '../cards';

export default () => (
  <CardsLayout>
    <Card title="Prototype" image="cloud/prototyping">
      Transform static designs into versatile, clickable prototypes without
      writing a single line of code.
    </Card>
    <Card title="Inspect" image="cloud/inspect">
      Build better products with smoother, faster handoffs from design to
      development.
    </Card>
    <Card title="Freehand" image="cloud/freehand">
      Work through design ideas in real time with an infinite collaborative
      space for your team.
    </Card>
    <Card title="Boards" image="cloud/boards">
      Create custom mood and brand boards, share galleries, present design
      assets, and much more.
    </Card>
    <Card title="Integrations" image="cloud/integrations">
      Get the power of InVision in the places you work best, including Slack,
      Dropbox, JIRA, Trello, and more.
    </Card>
  </CardsLayout>
);
