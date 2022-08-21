import { RouteBase } from 'constants/routeUrl';
import Dashboard from 'assets/dashboard.png';
import Checkin from 'assets/checkin.png';
import Comment from 'assets/b-comment.png';
import Okrs from 'assets/okrs.png';
import Report from 'assets/report.png';
import Quiz from 'assets/quiz.png';

export const menuDefault = [
  { id: 1, title: 'Dashboard', path: RouteBase.Dashboard, src: Dashboard },
  { id: 2, title: 'Check-in', path: RouteBase.Checkin, src: Checkin },
  { id: 3, title: 'OKRs', path: '/okrs', src: Okrs },
  { id: 4, title: 'CFRs', path: '/cfrs', src: Comment },
  { id: 5, title: 'Report', path: '/report', src: Report },
  { id: 6, title: 'Quiz', path: '/quiz', src: Quiz },
];

export const menuSettings = [
  { id: 1, title: 'Dashboard', path: RouteBase.Dashboard, src: Dashboard },
  { id: 2, title: 'Quản lý nhân viên', path: RouteBase.EmployeeManager, src: Checkin },
  { id: 3, title: 'Quản lý vị trí công việc', path: '/okrs', src: Okrs },
  { id: 4, title: 'Quản lý bộ câu hỏi Checkin', path: '/cfrs', src: Comment },
  { id: 5, title: 'Quản lý bộ câu hỏi Quiz', path: '/report', src: Report },
  { id: 6, title: 'Quản lý License', path: '/quiz', src: Quiz },
];
