import flatten from 'flat';
import header from './header.json';
import messages from './messages.json';
import common from './common.json';

const locale = {
  header: flatten(header, {
    delimiter: '_',
  }),
  messages: flatten(messages, {
    delimiter: '_',
  }),
  common: flatten(common, {
    delimiter: '_',
  }),
};
export default locale;
