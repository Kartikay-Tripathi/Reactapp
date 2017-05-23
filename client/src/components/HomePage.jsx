import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';





const HomePage = () => (
	
	<div>
  <Card className="container">
    <CardTitle title="Welcome Developers!!" subtitle="This is the home page." />
    <DatePicker hintText="DatePicker" container="inline" mode="landscape" />
 </Card>
 </div>
    
);

export default HomePage;
