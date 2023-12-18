import { useQuery, UseQueryOptions } from "react-query";

export interface FamilyMember {
    userName: string;
    nickName: string;
    userId: number;
};

export interface User {
    userId: any;
    userName: string;
};

export interface TransferInfo {
    transferId: number;
    senderId: number;
    receiverId: number;
    amount: number;
    time: string;
};

//UserInfo 가져오기 & 회원가입 관련 query
interface GetUserCondition {
    userName: string;
};

interface UserParams {
    queryKey: [string, { info: GetUserCondition }];
};

async function getUser(params: UserParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(``);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const userId = await response.json();
    
    return ({userName:params.queryKey[1].info.userName, userId:userId})
}


export const getUserInfo = (
    conditions: GetUserCondition,
    ) => {
    return useQuery<User, Error>(
    ["signup", conditions],
    ()=>getUser({queryKey: ["", {info:conditions}]}));
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
    const response = await fetch(``);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const familyInfoList = await response.json();
    
    return familyInfoList;
}


export const getFamilyInfo = (
    conditions: GetFamilyInfoCondition,
    ) => {
    useQuery<FamilyMember[], Error>(
    ["user", "family", "info", conditions],
    ()=>getFamily({queryKey: ["", {info:conditions}]}))
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


export const getTransferList = (
    conditions: GetTransferListCondition,
    ) => 
    useQuery<TransferInfo[], Error>(
    ["history", "all", conditions],
    ()=>getTransfer({queryKey: ["", {info:conditions}]}),
);