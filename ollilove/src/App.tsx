import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { H1, H2, H3, P1, P2, P3, P4, Comment } from "./commons/Text";
import { ButtonGray, ButtonYellow } from "./commons/Button";
import { Tabbar } from "./commons/Tabbar";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import TransferRecord from './pages/TransferRecord/TransferRecord';
import FamilyMemberDetail from "./pages/FamilyMemberDetail.tsx/FamilyMemberDetail";
import ShortsDetail from "./pages/ShortsDetail/ShortsDetail";
import TransferAmountInput from "./pages/TransferAmountInput/TransferAmountInput";
import TransferConfirm from "./pages/TransferConfirm/TransferConfirm";
import Index from "./pages/Index/Index";
import Home from "./pages/Home/Home";
import ShortsList from "./pages/ShortsList/ShortsList";

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/familymemberdetail" element={<FamilyMemberDetail />}/>
          <Route path="/shortsdetail" element={<ShortsDetail />}/>
          <Route path="/shortslist" element={<ShortsList />}/>
          <Route path="/transferAmountinput" element={<TransferAmountInput />}/>
          <Route path="/transferconfirm" element={<TransferConfirm />}/>
          <Route path="/transferrecord" element={<TransferRecord />}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
