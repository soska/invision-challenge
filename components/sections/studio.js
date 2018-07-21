import { CardsLayout } from '../cards-layout';
import { Card } from '../cards';
export default () => (
  <CardsLayout>
    <Card title="Design Tool" image="studio/design-tools">
      Jump right into the screen design process with InVision Studio's intuitive
      vector-based drawing capabilities.
    </Card>
    <Card title="Built-in animation" image="studio/animation">
      Frictionless screen animations get you to the fine-tuning stage faster.
      directly in Studio as you design.
    </Card>
    <Card title="Prototyping" image="studio/prototyping">
      Create fluid interactions and high-fidelity prototypes faster than
      ever—and then preview your work directly within Studio.
    </Card>
    <Card title="Adaptive Layout" image="studio/adaptive-layout">
      Studio’s best-in-class layout engine lets you quickly and easily design,
      adjust, and scale your vision to fit any screen or layout.
    </Card>
    <Card title="DSM Integration" image="studio/dsm-integration">
      InVision’s Design System Manager guarantees instant access to your team’s
      global shared component libraries
    </Card>
    <Card title="App Ecosystem" image="studio/app-ecosystem">
      Studio’s connection to the entire InVision platform means instant
      collaboration for your whole team.
    </Card>
  </CardsLayout>
);
