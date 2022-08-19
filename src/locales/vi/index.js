import flatten from 'flat';
import header from './header.json';
import common from './common.json';
import messages from './messages.json';
import cfrs from './cfrs.json';

const locale = {
  header: flatten(header, {
    delimiter: '_',
  }),
  common: flatten(common, {
    delimiter: '_',
  }),
  messages: flatten(messages, {
    delimiter: '_',
  }),
  cfrs: flatten(cfrs, {
    delimiter: '_',
  }),
};
export default locale;
