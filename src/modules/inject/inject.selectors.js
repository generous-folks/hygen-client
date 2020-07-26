import { useInjectState } from './inject.context';
import { useSelector } from '../../utils/context.utils';

export const useInjectPathSelector = () => useSelector(useInjectState, ({ path }) => path);
export const useInjectFormSelector = () => useSelector(useInjectState, ({ form }) => form);
