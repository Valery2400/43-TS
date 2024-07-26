import styled from '@emotion/styled'

export const Consultation07Wrapper = styled.div`
  display: flex; //гибко контролировать элементы внутри
  flex-direction: column; // сверху вниз, т.е. вертикально
  align-items: center; // центрируем по центру
  gap: 30px; // промежутки между дочерними элементами
  flex: 1; // растянется на все доступное пространство
  padding: 50px; //
`
export const ButtonWrapper = styled.div`
  width: 200px; 
`

export const Result = styled.div`
 display: flex; 
 align-items: center;
 justify-content: center;
 width: 100%;
 min-height: 400px;
 padding: 30px;
 border: 2px solid;
 border-radius: 6px;
`

export const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export const Error = styled.div`
 font-size: 20px;
 color: red;
`
