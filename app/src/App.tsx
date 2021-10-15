import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SalesList } from './modules/sale/components/sales-list';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { InventoriesList } from './modules/inventory/components/inventory-list';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>Inventory</Tab>
            <Tab>Sales</Tab>
          </TabList>

          <TabPanel>
            <InventoriesList/>
          </TabPanel>
          <TabPanel>
            <SalesList/>
          </TabPanel>
        </Tabs>
      </div>
    </QueryClientProvider>
  );
}

export default App;
