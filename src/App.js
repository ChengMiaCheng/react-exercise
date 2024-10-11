
import EmojiFinder from './components/EmojiFinder';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import EmojiDetails from './components/EmojiDetails';
import EmojiCounter from './components/EmojiCounter';



export const App = () => {

  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<EmojiFinder/>}/>
        <Route path='/emoji/:slug' element={<EmojiDetails/>}/>
        <Route path='/emoji/counter' element={<EmojiCounter/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
    </AppWrapper>

  );
};

const AppWrapper = styled.div`
    margin: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
