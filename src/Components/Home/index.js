import React from 'react'
import { Grid } from 'material-ui'
import Top from './Top/Top'
import Bottom from './Body/Bottom'

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10}
  }

export default props =>
<Grid container>
<Grid item xs={12}>
 <Top styles={styles} />

</Grid>
<Grid item xs={12}>
  <Bottom styles={styles} />

</Grid>

</Grid>