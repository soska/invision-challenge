import TabsNav from '../components/timer-tab-nav';
import { Tabs, TabPanel } from '../components/tabs';
import Section from '../components/section';
import StudioSection from '../components/sections/studio';
import CloudSection from '../components/sections/cloud';
import DSMSection from '../components/sections/dsm';

export default () => (
  <div>
    <Tabs navComponent={TabsNav}>
      <TabPanel
        title="Design & Prototype"
        subtitle="InVision Studio"
        name="studio"
        component={Section}
      >
        <StudioSection />
      </TabPanel>
      <TabPanel
        title="Master your workflow"
        subtitle="InVision Cloud"
        name="cloud"
        component={Section}
      >
        <CloudSection />
      </TabPanel>
      <TabPanel
        title="Design at scale"
        subtitle="InVision DSM"
        name="dsm"
        component={Section}
      >
        <DSMSection />
      </TabPanel>
    </Tabs>
  </div>
);
