import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default ({ switchTabs }) =>
  <Paper>
    <Tabs
    value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {switchTabs.map(routes =>
        <Tab label={routes} />
      )}

    </Tabs>
  </Paper>