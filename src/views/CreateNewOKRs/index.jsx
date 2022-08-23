import React from 'react';
import { Formik, Form, Field, getIn, FieldArray } from 'formik';
import { useHistory } from 'react-router-dom';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from '../../components/icons';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const CreateNewOKRs = () => {
  const { t } = useTranslation();
  const history = useHistory();

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

  const initValues = {
    choosecycle: '',
    superiorokrs: '',
    yourtarget: '',
    checkbox: false,
    content: '',
    mainresults: [
      {
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
      },
    ],

    crosslink: '',
  };

  const ErrorMessage = ({ name }) => (
    <Field
      name={name}
      render={({ form }) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);
        return touch && error ? error : null;
      }}
    />
  );
  //! State

  //! Function

  const NewOkrsSchema = Yup.object().shape({
    choosecycle: Yup.string().required(t('messages:required_field', { key: t('newokr:Cycle') })),
    superiorokrs: Yup.string().required(t('messages:required_field', { key: t('newokr:SuperiorOkrs') })),
    yourtarget: Yup.string().required(t('messages:required_field', { key: t('newokr:YourTarget') })),
    content: Yup.string().required(t('messages:required_field', { key: t('newokr:Content') })),
    mainresults: Yup.array()
      .of(
        Yup.object().shape({
          mainresult: Yup.string().required(t('messages:required_field', { key: t('newokr:MainResult') })),
          target: Yup.string().required(t('messages:required_field', { key: t('newokr:Target') })),
          unit: Yup.string().required(t('messages:required_field', { key: t('newokr:Unit') })),
          planlink: Yup.string().required(t('messages:required_field', { key: t('newokr:PlanLink') })),
          resultlink: Yup.string().required(t('messages:required_field', { key: t('newokr:ResultLink') })),
          relatedmainresult: Yup.string().required(
            t('messages:required_field', { key: t('newokr:RelatedMainResult') }),
          ),
          themeasuringunit: Yup.string().required(t('messages:required_field', { key: t('newokr:ThemeasuringUnit') })),
          completiontime: Yup.string().required(t('messages:required_field', { key: t('newokr:CompletionTime') })),
          executor: Yup.string().required(t('messages:required_field', { key: t('newokr:Executor') })),
          responsibleforinterpretation: Yup.string().required(
            t('messages:required_field', { key: t('newokr:ResponsibleForInterpretation') }),
          ),
          consultant: Yup.string().required(t('messages:required_field', { key: t('newokr:Consultant') })),
          peoplenotice: Yup.string().required(t('messages:required_field', { key: t('newokr:PeopleNotice') })),
        }),
      ),
    crosslink: Yup.string().required(t('messages:required_field', { key: t('newokr:ChooseCycle') })),
  });

  const handleCancel = () => {
    history.push('/okrs');
  };

  //! Render
  return (
    <div className="container-add-new-okr">
      <h3 className="title">{t('newokr:AddNewOkrs')}</h3>
      <div className="content">
        <Formik
          initialValues={initValues}
          validationSchema={NewOkrsSchema}
          onSubmit={(values) => {
            console.log('values', values);
          }}
        >
          {({ values, errors, touched }) => {
            return (
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
                      <Field name="checkbox" className="check-box" type="checkbox" />
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

                <FieldArray name="mainresults">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.mainresults.length > 0 &&
                        values.mainresults.map((mainresult, index) => (
                          <div key={index}>
                            <div className="field">
                              <div className="main-label"></div>
                              <div className="SelectInputArea">
                                <div className="wrap">
                                  <div className="content-inwrap">
                                    <div className="row-content">
                                      <div className="input-field-left">
                                        <div>
                                          <Field
                                            name={`mainresults.${index}.mainresult`}
                                            component={CommonStyles.Input}
                                            style={{ width: '100%', height: '40px' }}
                                            label={t('newokr:MainResult')}
                                            placeholder={t('newokr:MainResultPlaceholder')}
                                            errorMsg={getIn(errors, `mainresults.${index}.mainresult`)}
                                            isTouched={getIn(touched, `mainresults.${index}.mainresult`)}
                                          />
                                        </div>
                                      </div>

                                      <div className="input-field-right">
                                        <Field
                                          name={`mainresults.${index}.target`}
                                          component={CommonStyles.Input}
                                          style={{ width: '100%', height: '40px' }}
                                          label={t('newokr:Target')}
                                          placeholder={t('newokr:TargetPlaceholder')}
                                          errorMsg={getIn(errors, `mainresults.${index}.target`)}
                                          isTouched={getIn(touched, `mainresults.${index}.target`)}
                                        />
                                      </div>
                                    </div>

                                    <div className="row-content">
                                      <div className="input-field-left">
                                        <div className="chidren-field-left">
                                          <div className="half">
                                            <Field
                                              name={`mainresults.${index}.unit`}
                                              label={t('newokr:Unit')}
                                              component={CommonStyles.SelectInputForm}
                                              placeholder={t('newokr:UnitPlaceholder')}
                                              listOption={listOption}
                                              errorMsg={getIn(errors, `mainresults.${index}.unit`)}
                                              isTouched={getIn(touched, `mainresults.${index}.unit`)}
                                            />
                                          </div>
                                          <div className="half">
                                            <Field
                                              name={`mainresults.${index}.planlink`}
                                              component={CommonStyles.Input}
                                              style={{ width: '100%', height: '40px' }}
                                              label={t('newokr:PlanLink')}
                                              placeholder={t('newokr:PlanLinkPlaceholder')}
                                              errorMsg={getIn(errors, `mainresults.${index}.planlink`)}
                                              isTouched={getIn(touched, `mainresults.${index}.planlink`)}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="input-field-right">
                                        <div>
                                          <Field
                                            name={`mainresults.${index}.resultlink`}
                                            component={CommonStyles.Input}
                                            style={{ width: '100%', height: '40px' }}
                                            label={t('newokr:ResultLink')}
                                            placeholder={t('newokr:ResultLinkPlaceholder')}
                                            errorMsg={getIn(errors, `mainresults.${index}.resultlink`)}
                                            isTouched={getIn(touched, `mainresults.${index}.resultlink`)}
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row-content">
                                      <div className="input-field-left">
                                        <div className="chidren-field-left">
                                          <div className="full">
                                            <Field
                                              name={`mainresults.${index}.relatedmainresult`}
                                              component={CommonStyles.SelectInputForm}
                                              listOption={listOption}
                                              label={t('newokr:RelatedMainResult')}
                                              placeholder={t('newokr:RelatedMainResultPlaceholder')}
                                              errorMsg={getIn(errors, `mainresults.${index}.relatedmainresult`)}
                                              isTouched={getIn(touched, `mainresults.${index}.relatedmainresult`)}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="input-field-right"></div>
                                    </div>
                                  </div>

                                  <div className="icon-close" onClick={() => remove(index)}>
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
                                              name={`mainresults.${index}.themeasuringunit`}
                                              label={t('newokr:TheMeasuringUnit')}
                                              component={CommonStyles.SelectInputForm}
                                              placeholder={t('newokr:TheMeasuringUnitPlaceholder')}
                                              listOption={listOption}
                                              errorMsg={getIn(errors, `mainresults.${index}.themeasuringunit`)}
                                              isTouched={getIn(touched, `mainresults.${index}.themeasuringunit`)}
                                            />
                                          </div>
                                          <div className="half">
                                            <Field
                                              name={`mainresults.${index}.completiontime`}
                                              label={t('newokr:CompletionTime')}
                                              component={CommonStyles.SelectInputForm}
                                              placeholder={t('newokr:CompletionTimePlaceholder')}
                                              listOption={listOption}
                                              errorMsg={getIn(errors, `mainresults.${index}.completiontime`)}
                                              isTouched={getIn(touched, `mainresults.${index}.completiontime`)}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="input-field-right">
                                        <div>
                                          <Field
                                            name={`mainresults.${index}.executor`}
                                            label={t('newokr:Executor')}
                                            component={CommonStyles.SelectInputForm}
                                            placeholder={t('newokr:ExecutorPlaceholder')}
                                            listOption={listOption}
                                            errorMsg={getIn(errors, `mainresults.${index}.executor`)}
                                            isTouched={getIn(touched, `mainresults.${index}.executor`)}
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row-content">
                                      <div className="input-field-left">
                                        <div className="chidren-field-left">
                                          <div className="half">
                                            <Field
                                              name={`mainresults.${index}.responsibleforinterpretation`}
                                              label={t('newokr:ResponsibleForInterpretation')}
                                              component={CommonStyles.SelectInputForm}
                                              placeholder={t('newokr:ResponsibleForInterpretationPlaceholder')}
                                              listOption={listOption}
                                              errorMsg={getIn(errors, `mainresults.${index}.responsibleforinterpretation`)}
                                              isTouched={getIn(touched, `mainresults.${index}.responsibleforinterpretation`)}
                                            />
                                          </div>
                                          <div className="half">
                                            <Field
                                              name={`mainresults.${index}.consultant`}
                                              label={t('newokr:Consultant')}
                                              component={CommonStyles.SelectInputForm}
                                              placeholder={t('newokr:ConsultantPlaceholder')}
                                              listOption={listOption}
                                              errorMsg={getIn(errors, `mainresults.${index}.consultant`)}
                                              isTouched={getIn(touched, `mainresults.${index}.consultant`)}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="input-field-right">
                                        <div>
                                          <Field
                                            name={`mainresults.${index}.peoplenotice`}
                                            label={t('newokr:PeopleNotice')}
                                            component={CommonStyles.SelectInputForm}
                                            placeholder={t('newokr:PeopleNoticePlaceholder')}
                                            listOption={listOption}
                                            errorMsg={getIn(errors, `mainresults.${index}.peoplenotice`)}
                                            isTouched={getIn(touched, `mainresults.${index}.peoplenotice`)}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="icon"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div className="field">
                        <div className="main-label"></div>
                        <div className="SelectInputArea">
                          <div
                            className="btn-add-main-result"
                            onClick={() =>
                              push({
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
                              })
                            }
                          >
                            <CommonIcons.AddCircle />
                            <p>{t('newokr:AddMainResult')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </FieldArray>

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
                      <div className="btn-add-cross-link" onClick={() => {}}>
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
                        onClick={handleCancel}
                      />
                      <CommonStyles.Button
                        color="primary"
                        type="submit"
                        borderRadius="round"
                        innerText={t('common:submit')}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreateNewOKRs;
