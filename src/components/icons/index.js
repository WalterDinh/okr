import {
  MdOutlineNotifications,
  MdAlarm,
  MdMailOutline,
  MdLockOutline,
  MdSettings,
  MdOutlinePersonOutline,
  MdKeyboardBackspace,
  MdCameraAlt,
  MdModeEditOutline,
  MdOutlineLink,
} from 'react-icons/md';
import { AiFillCaretUp, AiFillCaretDown, AiOutlineMenu, AiFillDelete } from 'react-icons/ai';
import { AiFillStar, AiOutlineLogout, AiOutlinePlus, AiOutlineDown } from 'react-icons/ai';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { SiSimpleanalytics } from 'react-icons/si';
import { BsSearch, BsFillChatFill, BsImageFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { GrAddCircle } from 'react-icons/gr';

export default {
  Bell: MdOutlineNotifications,
  Clock: MdAlarm,
  CaretUp: AiFillCaretUp,
  CareDown: AiFillCaretDown,
  Mail: MdMailOutline,
  Password: MdLockOutline,
  Setting: MdSettings,
  User: MdOutlinePersonOutline,
  Back: MdKeyboardBackspace,
  Star: AiFillStar,
  Logout: AiOutlineLogout,
  Add: AiOutlinePlus,
  Down: AiOutlineDown,
  Champion: EmojiEventsIcon,
  Alytics: SiSimpleanalytics,
  Search: BsSearch,
  Camera: MdCameraAlt,
  Close: GrClose,
  AddCircle: GrAddCircle,
  Menu: AiOutlineMenu,
  Edit: MdModeEditOutline,
  Delete: AiFillDelete,
  Image: BsImageFill,
  bubble: BsFillChatFill,
  Link: MdOutlineLink,
};
