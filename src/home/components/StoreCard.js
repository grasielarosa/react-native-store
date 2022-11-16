import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from 'react-native-paper';

const StoreCard = ({id, name, cover, onPressView}) => {
  return (
    <Card>
      <Card.Title title={name} titleVariant="titleLarge" />

      <Card.Cover source={cover} />
      <Card.Actions>
        <Button onPress={() => onPressView(id)}>View</Button>
      </Card.Actions>
    </Card>
  );
};

StoreCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  cover: PropTypes.number,
  onPressView: PropTypes.func.isRequired,
};

export default StoreCard;
