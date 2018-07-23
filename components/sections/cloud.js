import { CardsLayout } from '../cards-layout';
import { Card } from '../cards';
import Link from '../link';

export default () => (
  <CardsLayout>
    <Card title="Prototype" image="cloud/prototyping">
      <p>
        Transform static designs into versatile, clickable prototypes without
        writing a single line of code.
      </p>
      <Link href="#">Learn More</Link>
    </Card>
    <Card title="Inspect" image="cloud/inspect">
      <p>
        Build better products with smoother, faster handoffs from design to
        development.
      </p>
      <Link href="#">Learn More</Link>
    </Card>
    <Card title="Freehand" image="cloud/freehand">
      <p>
        Work through design ideas in real time with an infinite collaborative
        space for your team.
      </p>
      <Link href="#">Learn More</Link>
    </Card>
    <Card title="Boards" image="cloud/boards">
      <p>
        Create custom mood and brand boards, share galleries, present design
        assets, and much more.
      </p>
      <Link href="#">Learn More</Link>
    </Card>
    <Card title="Integrations" image="cloud/integrations">
      <p>
        Get the power of InVision in the places you work best, including Slack,
        Dropbox, JIRA, Trello, and more.
      </p>
      <Link href="#">Learn More</Link>
    </Card>
  </CardsLayout>
);
