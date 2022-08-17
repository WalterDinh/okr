import flatten from 'flat';
import header from './header.json';
import forgotpassword from './forgotpassword.json';
import common from './common.json';
import messages from './messages.json';

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
  forgotpassword: flatten(forgotpassword, {
    delimiter: '_',
  }),
};
export default locale;
