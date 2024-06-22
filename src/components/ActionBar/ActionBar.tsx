import { ActionButton } from '../ActionButton/ActionButton';
import { ActionBarWrapper, LabelAction } from './styles';

export const ActionBar = () => {
  return (
    <ActionBarWrapper>
      <LabelAction>Continuar comprando</LabelAction>
      <ActionButton />
    </ActionBarWrapper>
  );
};
