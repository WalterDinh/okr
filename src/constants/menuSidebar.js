import { RouteBase } from 'constants/routeUrl';
import { iconImg } from 'assets';

export const menuDefault = [
  { id: 1, title: 'Dashboard', path: RouteBase.Dashboard, src: iconImg.Dashboard },
  { id: 2, title: 'Check-in', path: RouteBase.Checkin, src: iconImg.Checkin },
  { id: 3, title: 'OKRs', path: RouteBase.Okrs, src: iconImg.Okrs },
  { id: 4, title: 'CFRs', path: RouteBase.CFRs, src: iconImg.Comment },
  { id: 5, title: 'Report', path: RouteBase.Report, src: iconImg.Report },
  { id: 6, title: 'Quiz', path: RouteBase.Quiz, src: iconImg.Quiz },
];

export const menuSettings = [
  { id: 1, title: 'Dashboard', path: RouteBase.Dashboard, src: iconImg.Dashboard },
  { id: 2, title: 'Quản lý nhân viên', path: RouteBase.EmployeeManager, src: iconImg.User1 },
  { id: 3, title: 'Quản lý vị trí công việc', path: RouteBase.JobLocationManage, src: iconImg.Badge },
  { id: 4, title: 'Quản lý bộ câu hỏi Checkin', path: RouteBase.ManageQuestions, src: iconImg.calendarCheck },
  { id: 5, title: 'Quản lý bộ câu hỏi Quiz', path: RouteBase.ManageQuiz, src: iconImg.Question },
  { id: 6, title: 'Quản lý License', path: RouteBase.LicenseManage, src: iconImg.creditCard },
];
