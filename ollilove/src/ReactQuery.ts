import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { User } from "./types/user";
import { FamilyMember } from "./types/familyMember";
import { TransferInfo } from "./types/transferInfo";
import { Account } from "./types/account";

const userUrl = "http://kbt1-ollilove-user-service:8080/api/user/";
const transferUrl = "http://kbt1-ollilove-transfer-service:8081/api/transfer/";
const accountUrl = "http://kbt1-ollilove-transfer-service:8081/api/account/";
const historyUrl = ' "http://kbt1-ollilove-transfer-service:8081/api/history/"';

// **** GET/POST 맞는지 확인
// **** 파라미터 확인
// **** 변수명 확인

// 회원가입 관련 query
interface SignUpCondition {
  userName: string;
  profile: string;
  familyId: string;
}

interface UserParams {
  queryKey: [string, { info: SignUpCondition }];
}

async function signUpfunc(params: UserParams) {
  const [, { info }] = params.queryKey;
  const response = await fetch(userUrl + "signup", {
    method: "POST",
    body: JSON.stringify({ info }),
  });
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const user = await response.json();

  localStorage.setItem("userId", user.userId);
  localStorage.setItem("userName", user.userName);
  localStorage.setItem("profile", user.profile);
  localStorage.setItem("familyId", info.familyId.toString());

  return user;
}

export const useSignUp = (conditions: SignUpCondition) => {
  return useMutation<User, Error>(
    ["signup", conditions],
    () => signUpfunc({ queryKey: ["signup", { info: conditions }] }),
    {
      onSuccess: () => {
        alert("회원가입 성공");
      },
      onError: (e) => {
        console.log(e);
        alert("회원가입 에러");
      },
    }
  );
};

// 유저 정보 받아오기 관련 query
interface GetUserInfoCondition {
  userId: number;
}

interface GetUserParams {
  queryKey: [string, { info: GetUserInfoCondition }];
}

async function getUser(params: GetUserParams) {
  const [, { info }] = params.queryKey;
  const response = await fetch(userUrl + `${info.userId}/`);
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const user = await response.json();

  return user;
}

export const GetUser = (conditions: GetUserInfoCondition) => {
  return useQuery<User, Error>(["getUser", conditions], () =>
    getUser({ queryKey: ["getUser", { info: conditions }] })
  );
};

//FamilyInfo 가져오기 관련 query
interface GetFamilyInfoCondition {
  userId: number;
}

interface FamilyInfoParams {
  queryKey: [string, { info: GetFamilyInfoCondition }];
}

async function getFamily(params: FamilyInfoParams) {
  const [, { info }] = params.queryKey;
  const response = await fetch(userUrl + `/family/info/`);
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const familyInfoList = await response.json();

  return familyInfoList;
}

export const GetFamilyInfo = (conditions: GetFamilyInfoCondition) => {
  return useQuery<FamilyMember[], Error>(["getFamily", conditions], () =>
    getFamily({ queryKey: ["getFamily", { info: conditions }] })
  );
};

// 송금 전체 내역 관련 query

interface GetTransferAllCondition {
  userId: number;
  count: number;
}

interface TransferAllParams {
  queryKey: [string, { info: GetTransferAllCondition }];
}

async function getTransferAll(params: TransferAllParams) {
  const [, { info }] = params.queryKey;
  const response = await fetch(historyUrl);
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const TransferList = await response.json();

  return TransferList;
}

export const GetTransferAll = (conditions: GetTransferAllCondition) => {
  return useQuery<TransferInfo[], Error>(["getTransferAll", conditions], () =>
    getTransferAll({ queryKey: ["getTransferAll", { info: conditions }] })
  );
};

// 계좌 정보 받아오기 관련 query
interface GetAccountInfoCondition {
  userId: number;
}

interface GetAccountParams {
  queryKey: [string, { info: GetAccountInfoCondition }];
}

async function getAccount(params: GetAccountParams) {
  const [, { info }] = params.queryKey;
  const response = await fetch(accountUrl + `${info.userId}/`);
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const account = await response.json();

  return account;
}

export const GetAccount = (conditions: GetAccountInfoCondition) => {
  return useQuery<Account, Error>(["getAccount", conditions], () =>
    getAccount({ queryKey: ["getAccount", { info: conditions }] })
  );
};

// 송금 개인 간 내역 관련 query

interface GetTransferPersonalCondition {
  userId: number;
  targetUserId: number;
  count: number;
}

interface TransferPersonalParams {
  queryKey: [string, { info: GetTransferPersonalCondition }];
}

async function getTransferPersonal(params: TransferPersonalParams) {
  const [, { info }] = params.queryKey;
  const response = await fetch(historyUrl + `/history`);
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const TransferList = await response.json();

  return TransferList;
}

export const GetTransferPersonal = (
  conditions: GetTransferPersonalCondition
) => {
  return useQuery<TransferInfo[], Error>(
    ["getTransferPersonal", conditions],
    () =>
      getTransferPersonal({
        queryKey: ["getTransferPersonal", { info: conditions }],
      })
  );
};
