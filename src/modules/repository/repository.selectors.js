import { useRepositoryState } from './repository.context';
import { useSelector } from '../../utils/context.utils';

export const useRepositorySelector = () =>
  useSelector(useRepositoryState, ({ repository }) => repository);
