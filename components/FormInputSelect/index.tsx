import Container from 'components/Container'
import InputSelect from 'components/InputSelect'
import React from 'react'

type Props = {}

const listOption=['a','b','c']

function FormInputSelect({}: Props) {
  return (
    <Container>
        <InputSelect lable='Đơn vị đo lường' placehoder='Lựa chọn' listOption={listOption} />
    </Container>
  )
}

export default FormInputSelect