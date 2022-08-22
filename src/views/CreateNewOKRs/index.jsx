import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from '../../components/icons';
import { passwordRegex } from 'constants';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const CreateNewOKRs = () => {
  const { t } = useTranslation();
  const listOption = [
    {
      value: 'OKRs1',
      label: 'OKRs1',
    },
    {
      value: 'OKRs2',
      label: 'OKRs2',
    },
  ];
  //! State

  //! Function
  const NewOkrsSchema = Yup.object().shape({
    signature: Yup.string()
      // .matches(passwordRegex, t('messages:wrong-format', { key: t('common:password') }))
      .required(t('messages:required_field', { key: t('common:password') })),
  });

  const handleAddMainResult = () => {};

  //! Render
  return (
    <div className="container-add-new-okr">
      <h3 className="title">{t('newokr:AddNewOkrs')}</h3>
      <div className="content">
        <Formik
          initialValues={{
            choosecycle: '',
            superiorokrs: '',
            yourtarget: '',
            content: '',
            mainresult: '',
            target: '',
            unit: '',
            planlink: '',
            resultlink: '',
            relatedmainresult: '',
            themeasuringunit: '',
            completiontime: '',
            executor: '',
            responsibleforinterpretation: '',
            consultant: '',
            peoplenotice: '',
            crosslink: '',
          }}
          validationSchema={NewOkrsSchema}
          onSubmit={(values, actions) => {}}
        >
          <Form>
            <div className="field">
              <div className="main-label">{t('newokr:Cycle')}</div>
              <div className="SelectInputArea">
                <Field
                  name="choosecycle"
                  component={CommonStyles.SelectInputForm}
                  placeholder={t('newokr:ChooseCycle')}
                  listOption={listOption}
                  style={{ width: '300px', height: '40px' }}
                />
              </div>
            </div>

            <div className="field">
              <div className="main-label">{t('newokr:SuperiorOkrs')}</div>
              <div className="SelectInputArea">
                <Field
                  name="superiorokrs"
                  component={CommonStyles.SelectInputForm}
                  placeholder={t('newokr:ChooseOkrs')}
                  listOption={listOption}
                  style={{ width: '300px', height: '40px' }}
                />
              </div>
            </div>

            <div className="field">
              <div className="main-label">{t('newokr:YourTarget')}</div>
              <div className="SelectInputArea">
                <Field
                  name="yourtarget"
                  component={CommonStyles.Input}
                  placeholder={t('newokr:YourTargetPlaceholder')}
                  style={{ width: '100%', height: '40px' }}
                />
              </div>
            </div>

            <div className="field">
              <div className="main-label"></div>
              <div className="SelectInputArea">
                <div className="check-box-area">
                  <input className="check-box" type="checkbox" />
                  <label htmlFor="check-box">{t('newokr:ChallengeObject')}</label>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="main-label">{t('newokr:Content')}</div>
              <div className="SelectInputArea">
                <Field
                  name="content"
                  component={CommonStyles.Input}
                  placeholder={t('newokr:ContentPlaceholder')}
                  style={{ width: '100%', height: '40px' }}
                />
              </div>
            </div>

            <div className="field">
              <div className="main-label"></div>
              <div className="SelectInputArea">
                <div className="wrap">
                  <div className="content-inwrap">
                    <div className="row-content">
                      <div className="input-field-left">
                        <div>
                          <Field
                            name="mainresult"
                            component={CommonStyles.Input}
                            style={{ width: '100%', height: '40px' }}
                            label={t('newokr:MainResult')}
                            placeholder={t('newokr:MainResultPlaceholder')}
                          />
                        </div>
                      </div>

                      <div className="input-field-right">
                        <Field
                          name="target"
                          component={CommonStyles.Input}
                          style={{ width: '100%', height: '40px' }}
                          label={t('newokr:Target')}
                          placeholder={t('newokr:TargetPlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="row-content">
                      <div className="input-field-left">
                        <div className="chidren-field-left">
                          <div className="half">
                            <Field
                              name="unit"
                              label={t('newokr:Unit')}
                              component={CommonStyles.SelectInputForm}
                              placeholder={t('newokr:UnitPlaceholder')}
                              listOption={listOption}
                            />
                          </div>
                          <div className="half">
                            <Field
                              name="planlink"
                              component={CommonStyles.Input}
                              style={{ width: '100%', height: '40px' }}
                              label={t('newokr:PlanLink')}
                              placeholder={t('newokr:PlanLinkPlaceholder')}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-field-right">
                        <div>
                          <Field
                            name="resultlink"
                            component={CommonStyles.Input}
                            style={{ width: '100%', height: '40px' }}
                            label={t('newokr:ResultLink')}
                            placeholder={t('newokr:ResultLinkPlaceholder')}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row-content">
                      <div className="input-field-left">
                        <div className="chidren-field-left">
                          <div className="full">
                            <Field
                              name="relatedmainresult"
                              component={CommonStyles.SelectInputForm}
                              listOption={listOption}
                              label={t('newokr:RelatedMainResult')}
                              placeholder={t('newokr:RelatedMainResultPlaceholder')}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-field-right"></div>
                    </div>
                  </div>

                  <div className="icon-close">
                    <CommonIcons.Close />
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="main-label"></div>
              <div className="SelectInputArea">
                <div className="wrap">
                  <div className="content-inwrap">
                    <div className="row-content">
                      <div className="input-field-left">
                        <div className="chidren-field-left">
                          <div className="half">
                            <Field
                              name="themeasuringunit"
                              label={t('newokr:TheMeasuringUnit')}
                              component={CommonStyles.SelectInputForm}
                              placeholder={t('newokr:TheMeasuringUnitPlaceholder')}
                              listOption={listOption}
                            />
                          </div>
                          <div className="half">
                            <Field
                              name="completiontime"
                              label={t('newokr:CompletionTime')}
                              component={CommonStyles.SelectInputForm}
                              placeholder={t('newokr:CompletionTimePlaceholder')}
                              listOption={listOption}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-field-right">
                        <div>
                          <Field
                            name="executor"
                            label={t('newokr:Executor')}
                            component={CommonStyles.SelectInputForm}
                            placeholder={t('newokr:ExecutorPlaceholder')}
                            listOption={listOption}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row-content">
                      <div className="input-field-left">
                        <div className="chidren-field-left">
                          <div className="half">
                            <Field
                              name="responsibleforinterpretation"
                              label={t('newokr:ResponsibleForInterpretation')}
                              component={CommonStyles.SelectInputForm}
                              placeholder={t('newokr:ResponsibleForInterpretationPlaceholder')}
                              listOption={listOption}
                            />
                          </div>
                          <div className="half">
                            <Field
                              name="consultant"
                              label={t('newokr:Consultant')}
                              component={CommonStyles.SelectInputForm}
                              placeholder={t('newokr:ConsultantPlaceholder')}
                              listOption={listOption}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-field-right">
                        <div>
                          <Field
                            name="peoplenotice"
                            label={t('newokr:PeopleNotice')}
                            component={CommonStyles.SelectInputForm}
                            placeholder={t('newokr:PeopleNoticePlaceholder')}
                            listOption={listOption}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="icon"></div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="main-label"></div>
              <div className="SelectInputArea">
                <div className="btn-add-main-result" onClick={handleAddMainResult}>
                  <CommonIcons.AddCircle />
                  <p>{t('newokr:AddMainResult')}</p>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="main-label">{t('newokr:CrossLink')}</div>
              <div className="SelectInputArea">
                <div className="crosslink">
                  <Field
                    name="crosslink"
                    component={CommonStyles.SelectInputForm}
                    placeholder={t('newokr:CrossLinkPlaceholder')}
                    listOption={listOption}
                    style={{ width: '300px', height: '40px' }}
                  />
                  <div className="btn-add-cross-link" onClick={handleAddMainResult}>
                  <CommonIcons.AddCircle />
                  <p>{t('newokr:AddCrossLink')}</p>
                </div>
                </div>
              </div>
            </div>

            <div className="field" style={{ margin: 0 }}>
              <div className="main-label"></div>
              <div className="SelectInputArea">
                <div className="btn-area">
                  <CommonStyles.Button
                    color="secondary-gray"
                    type="button"
                    borderRadius="round"
                    innerText={t('common:cancel')}
                  />
                  <CommonStyles.Button color="primary" borderRadius="round" innerText={t('common:submit')} />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateNewOKRs;
