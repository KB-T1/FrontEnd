import { useQuery, UseQueryOptions } from "react-query";
import { User } from "./types/user";
import { FamilyMember } from "./types/familyMember";
import { TransferInfo } from "./types/transferInfo";

const userUrl = "http://kbt1-ollilove-user-service:8080/api/"
const transferUrl = "http://kbt1-ollilove-transfer-service:8081/api/"

// 회원가입 관련 query
interface SignUpCondition {
    userName: string;
    profile: string;
    familyId: number;
};

interface UserParams {
    queryKey: [string, { info: SignUpCondition }];
};

async function signUpfunc(params: UserParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(userUrl+'signup/',
    {
        method: "POST",
        body: JSON.stringify({info}),
      });
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const user = await response.json();

    localStorage.setItem("userId", user.userId)
    localStorage.setItem("userName", user.userName)
    localStorage.setItem("profile", user.profile)
    localStorage.setItem("familyId", info.familyId.toString())

    return user;
}


export const SignUp = (
    conditions: SignUpCondition,
    ) => {
    return useQuery<User, Error>(
    ["signup", conditions],
    ()=>signUpfunc({queryKey: ["signup", {info:conditions}]}),
    {
        onSuccess: data => {
            return data
        }
    }
    
    );
}

// 유저 정보 받아오기 관련 query
interface GetUserInfoCondition {
    userId: number;
};

interface GetUserParams {
    queryKey: [string, { info: GetUserInfoCondition }];
};

async function getUser(params: GetUserParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(userUrl+`${info.userId}/`);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const user = await response.json();

    return user;
}


export const GetUser = (
    conditions: GetUserInfoCondition,
    ) => {
    return useQuery<User, Error>(
    ["getUser", conditions],
    ()=>getUser({queryKey: ["getUser", {info:conditions}]})
    );
}

//FamilyInfo 가져오기 관련 query
interface GetFamilyInfoCondition {
    userId: number;
};

interface FamilyInfoParams {
    queryKey: [string, { info: GetFamilyInfoCondition }];
};

async function getFamily(params: FamilyInfoParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(userUrl);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const familyInfoList = await response.json();
    
    return familyInfoList;
}


export const GetFamilyInfo = (
    conditions: GetFamilyInfoCondition,
    ) => {
    return useQuery<FamilyMember[], Error>(
    ["user", "family", conditions],
    ()=>getFamily({queryKey: ["getFamilyInfo", {info:conditions}]})
    )
}

// 송금 내역 관련 query

interface GetTransferListCondition {
    userId: number;
    count: number; // 요청 데이터 개수
};

interface TransferListParams {
    queryKey: [string, { info: GetTransferListCondition }];
};

async function getTransfer(params: TransferListParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(``);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const TransferList = await response.json();
    
    return TransferList;
}


export const GetTransferList = (
    conditions: GetTransferListCondition,
    ) => {
    return useQuery<TransferInfo[], Error>(
    ["history", "all", conditions],
    ()=>getTransfer({queryKey: ["getTransferList", {info:conditions}]})
);
}