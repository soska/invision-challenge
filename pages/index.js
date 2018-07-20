import TabsNav from '../components/timer-tab-nav';
import { Tabs, TabPanel } from '../components/tabs';
import StudioSection from '../components/sections/studio';
import CloudSection from '../components/sections/cloud';
import DSMSection from '../components/sections/dsm';
export default () => (
  <div>
    <Tabs navComponent={TabsNav} selected={'cloud'}>
      <TabPanel
        title="Design & Prototype"
        subtitle="InVision Studio"
        name="studio"
      >
        <StudioSection />
      </TabPanel>
      <TabPanel
        title="Master your workflow"
        subtitle="InVision Cloud"
        name="cloud"
      >
        <CloudSection />
      </TabPanel>
      <TabPanel title="Design at scale" subtitle="InVision DSM" name="dsm">
        <DSMSection />
      </TabPanel>
    </Tabs>
  </div>
);
