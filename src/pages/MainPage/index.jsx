import React from 'react';
import { useLocation } from 'react-router-dom';
import Hooks from '../../components/Hooks';

export default () => {
  const { search = '?=' } = useLocation();

  return <Hooks title={search.split('=')[1]} />;
};
