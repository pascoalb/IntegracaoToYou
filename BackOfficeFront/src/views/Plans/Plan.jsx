import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Progress } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

const propTypes = {
  header: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  invert: PropTypes.bool,
};

class Plan extends Component {
  render() {
    const { className, cssModule, header, icon, color, value, children, invert, active, ...attributes } = this.props;

    // demo purposes only
    const progress = { style: '', color: color, value: value };
    const card = { style: '', bgColor: '', icon: icon };

    if (invert) {
      progress.style = 'progress-white';
      progress.color = '';
      card.style = 'text-white';
      card.bgColor = 'bg-' + color;
    }

    if(active){
        card.bgColor = 'bg-dark';
        card.icon = 'icon-star';
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    progress.style = classNames('progress-xs mt-3 mb-0', progress.style);

    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          <div className="h1 text-muted text-right mb-2">
            <i className={card.icon}></i>
          </div>
          <div className="h1 mb-0">{header}</div>
          <small className="text-muted text-uppercase font-weight-bold">{children}</small>
          <Progress className={progress.style} color={progress.color} value={progress.value} />
        </CardBody>
      </Card>
    );
  }
}

Plan.propTypes = propTypes;

export default Plan;