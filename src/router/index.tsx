import { Routes as RRDRoutes, Route, Navigate } from 'react-router-dom';

import { InitialPage } from '@/sections/initial/page';
import { WhoWeAre } from '@/sections/who-we-are/page';

function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Navigate replace to="main-page" />} />
      <Route path="/main-page" element={<InitialPage />} />
      <Route path="/quem-somos" element={<WhoWeAre />} />
    </RRDRoutes>
  );
}

export default Routes;
