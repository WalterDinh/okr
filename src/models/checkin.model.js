class CheckinModel {
  parseListCheckinForResult(response) {
    const confidence = ['Rất ổn', 'Ổn', 'Không ổn lắm'];
    const { data } = response;
    if (data) {
      const listResult = [];
      for (const result of data.okr_result) {
        listResult.push({
          mainResult: result?.key_result,
          target: result?.target,
          unit: result?.unit_name,
          plan: result?.plan_url,
          result_url: result?.result_url,
          processed: result?.processed,
          change: result?.percent_changed,
          confidence: confidence[result?.confident],
          achieved: result?.current_done,
        });
      }
      return listResult;
    }
    return [];
  }
  parseListCheckin(response) {
    const confidence = ['Rất ổn', 'Ổn', 'Không ổn lắm'];
    const status = ['Quá hạn', 'Check-in đúng hạn'];
    const { data } = response;
    if (data) {
      const listCheckin = [];
      for (const checkin of data.results) {
        listCheckin.push({
          goal: checkin.object_name,
          mainResult: checkin?.count_result,
          progress: checkin?.percent_completed,
          change: checkin?.percent_changed,
          employee: checkin?.user.full_name,
          employeeAva: checkin?.user.img_url,
          confidence: confidence[checkin?.confident],
          status: status[checkin?.last_checkin?.checkin_status] || 'Chưa check-in',
          isDone: checkin?.is_done,
          id: checkin?.id,
          result: checkin?.okr_result,
        });
      }
      return listCheckin;
    }
    return [];
  }
  parseCurrentListCheckinDetail(response) {
    const { data } = response;
  }
}

export default CheckinModel;
