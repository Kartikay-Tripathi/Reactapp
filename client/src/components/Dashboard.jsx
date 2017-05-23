import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Dashboard = ({secret}) => (
  <Card className="container">
   
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."

    />
    {secret && <CardText style={{ fontSize: '16px', color: 'green' }}>{secret}</CardText>}
    
  </Card>

);
   

Dashboard.propTypes = {
  secret: PropTypes.string.isRequired
};

export default Dashboard;
