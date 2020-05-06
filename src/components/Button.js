/// @flow
import React, { PureComponent } from 'react';
import { dynamicClassName } from 'utils/dynamicClassName';
import { Link } from 'react-router-dom';

type Props = {
  label: string,
  url: string,
  isDisabled?: boolean,
  isFull?: boolean,
  onClick?: Function
};

class Button extends PureComponent<Props> {
  props: Props;

  static defaultProps = {
    label: 'Trouver un club',
    url: '#'
  };

  render() {
    const { isDisabled, isFull, onClick } = this.props;
    const classNames = dynamicClassName('btn btn--primary');
    isDisabled && classNames.add('is-disabled');
    isFull && classNames.add('btn--full');
    {/* @apsulis TBD si ça ouvre un lien, on peut le décrire, sinon, retirons le title (genre si c'est un button avec action JS) */}
    return (
      <Link title="TBD C'est un composant sans contexte particulier du coup je ne sais pas quoi mettre" onClick={onClick} to={this.props.url} className={classNames.build()}>
        {this.props.label}
      </Link>
    );
  }
}

export default Button;
