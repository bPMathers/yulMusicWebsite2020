import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ServiceDetailComponent from './ServiceDetailComponent';

const lorem =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

const services = [
  { title: 'Services 1', description: lorem },
  { title: 'Services 2', description: lorem },
  { title: 'Services 3', description: lorem },
  { title: 'Services 4', description: lorem },
  { title: 'Services 5', description: lorem },
];

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    minWidth: '1200px',
    minHeight: '90vh',
    display: 'flex',
    color: theme.palette.secondary.main,
  },
  leftColumn: {
    border: `1px solid ${theme.palette.secondary.main}`,
    width: '20%',
  },
  rightColumn: {
    border: `1px solid ${theme.palette.secondary.main}`,
    width: '80%',
  },
  servicesList: {
    padding: '10px',
  },
  serviceItem: {
    padding: '5px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: 'max-content',
  },
}));

const ServicesComponent = () => {
  const classes = useStyles();
  const [selectedService, setselectedService] = useState(services[0]);

  const handleServiceSelection = (index) => {
    setselectedService(services[index]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <div className={classes.servicesList}>
          {services.map((service, index) => (
            <div onClick={() => handleServiceSelection(index)}>
              <Typography className={classes.serviceItem} variant={'h6'}>
                {service.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.rightColumn}>
        <ServiceDetailComponent
          key={selectedService.title}
          service={selectedService}
        />
      </div>
    </div>
  );
};

export default ServicesComponent;
