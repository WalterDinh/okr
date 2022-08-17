import flatten from 'flat';
import header from './header.json';

const locale = {
  header: flatten(header, {
    delimiter: '_',
  }),
};
export default locale;
